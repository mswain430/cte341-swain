const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;


const getAll = async (req, res) => {
  try {
  const result = await mongodb.getDb().db('flowerdb').collection('zipcodes').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  })
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

const getSingle = async (req, res) => {
  if(!ObjectId.isValid(req.params.id)){
    res.status(400).json('Must use a valid zipcode id to fine a zipcode instance')
  }
  const zipcodeId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('flowerdb').collection('zipcodes').find({ _id: zipcodeId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    //res.setHeader('Content-Type', 'text/plain');
    res.status(200).json(lists[0]);
  });
  };

const createZipcode = async (req, res) => {
  const zipcode = {
    zipcode: req.body.zipcode,
    zone: req.body.zone,
    trange: req.body.trange,
    zonetitle: req.body.zonetitle
  };
  console.log(req.body);
  const response = await mongodb.getDb().db('flowerdb').collection('zipcodes').insertOne(zipcode);
    if (response.acknowledged) {
      res.status(201).json(response);
      res.setHeader('Content-Type', 'text/plain');
      } else {
        res.status(500).json(response.error || 'Some error occurred while creating zipcode');
      }
 };


const updateZipcode = async (req, res) => {
  if(!ObjectId.isValid(req.params.id)){
    res.status(400).json('Must use a valid contact id to fine a flower instance')
  }
   const zipcodeId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const flower = {
    zipcode: req.body.zipcode,
    zone: req.body.zone,
    trange: req.body.trange,
    zonetitle: req.body.zonetitle
  };
  const response = await mongodb
    .getDb()
    .db('flowerdb')
    .collection('zipcodes')
    .replaceOne({ _id: zipcodeId }, flower);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
      } else {
        res.status(500).json(response.error || 'Some error occurred while updating the zipcode.');
      }
  };

const deleteZipcode = async (req, res) => {
  if(!ObjectId.isValid(req.params.id)){
    res.status(400).json('Must use a valid contact id to fine a zipcode instance')
  } 
  try {
  const zipcodeId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDb()
    .db('flowerdb')
    .collection('zipcodes')
    .deleteOne({ _id: zipcodeId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while deleting the zipcode.');
    }
  } catch (err) {
  res.status(500).json({err});
  }
};

module.exports = { 
  getAll, 
  getSingle, 
  createZipcode, 
  updateZipcode, 
  deleteZipcode 
};