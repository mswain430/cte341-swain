const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  try {
  const result = await mongodb.getDb().db('flowerdb').collection('flowers').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

const getSingle = async (req, res) => {
  if(!ObjectId.isValid(req.params.id)){
  res.status(400).json('Must use a valid contact id to fine a flower instance') }
  const flowerId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('flowerdb').collection('flowers').find({ _id: flowerId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  })
};

const createFlower = async (req, res) => {
  try { const { error } = schema.validate(req.body); if (error) { return res.status(400).json({ error: error.details[0].message }); }
    const flower = {
      flowerName: req.body.flowerName,
      family: req.body.famiy,
      type: req.body.type,
      img: req.body.img,
      desc: req.body.desc,
      location: req.body.location,
      droughtTolerant: req.body.droughtTolerant,
      bloomTime: req.body.bloomTime,
      exposure: req.body.exposure,
      zipcode: req.body.zipcode
    };
    console.log(req.body);
    const response = await mongodb.getDb().db('flowerdb').collection('flowers').insertOne(flower);
    if (response.acknowledged) {
      res.status(201).json(response);
      res.setHeader('Content-Type', 'text/plain');
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating contact');
    }
  } catch (err) { res.status(500).json({ message: err.message }); }
 };

const updateFlower = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid contact id to fine a flower instance')  }
    const flowerId = new ObjectId(req.params.id);
    // be aware of updateOne if you only want to update specific fields
    const flower = {
      $set: {
      flowerName: req.body.flowerName,
      family: req.body.family,
      type: req.body.type,
      img: req.body.img,
      desc: req.body.desc,
      location: req.body.location,
      droughtTolerant: req.body.droughtTolerant,
      bloomTime: req.body.bloomTime,
      exposure: req.body.exposure,
      zipcode: req.body.zipcode
    }
  };
  const response = await mongodb
    .getDb()
    .db('flowerdb')
    .collection('flowers')
    .replaceOne({ _id: flowerId }, flower);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the contact.');
  }
};

const deleteFlower = async (req, res) => {
  if(!ObjectId.isValid(req.params.id)){
    res.status(400).json('Must use a valid contact id to fine a flower instance')
  } 
  const flowerId = new ObjectId(req.params.id);
  const response = await mongodb
  .getDb()
  .db('flowerdb')
  .collection('flowers')
  .deleteOne({ _id: flowerId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
};

module.exports = {  
  getAll, 
  getSingle, 
  createFlower, 
  updateFlower, 
  deleteFlower 
};