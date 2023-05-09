const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;


const getAll = async (req, res) => {
  try {
  const result = await mongodb.getDb().db('flowerdb').collection('zone9flowers').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  })
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

const getSingle = async (req, res) => {
  try {
  const flowerId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('flowerdb').collection('zone9flowers').find({ _id: flowerId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    //res.setHeader('Content-Type', 'text/plain');
    res.status(200).json(lists[0]);
  })
  } catch (err) {
    res.status(500).json({err});
  }
};

const createFlower = async (req, res) => {
  try {
  const flower = {
    flowerName: req.body.flowerName,
    family: req.body.famiy,
    type: req.body.type,
    img: req.body.img,
    desc: req.body.desc,
    location: req.body.location,
    droughtTolerant: req.body.droughtTolerant,
    bloomTime: req.body.bloomTime,
    exposure: req.body.exposure
  };
  console.log(req.body);
  const response = await mongodb.getDb().db('flowerdb').collection('zone9flowers').insertOne(flower);
  if (response.acknowledged) {
    res.status(201).json(response);
    res.setHeader('Content-Type', 'text/plain');
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating contact');
    }
  } catch (err) {
  res.status(500).json({err});
  }
};

const updateFlower = async (req, res) => {
  try {
  const flowerId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const flower = {
    flowerName: req.body.flowerName,
    family: req.body.famiy,
    type: req.body.type,
    img: req.body.img,
    desc: req.body.desc,
    location: req.body.location,
    droughtTolerant: req.body.droughtTolerant,
    bloomTime: req.body.bloomTime,
    exposure: req.body.exposure
  };
  const response = await mongodb
    .getDb()
    .db('flowerdb')
    .collection('zone9flowers')
    .replaceOne({ _id: flowerId }, flower);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
      } else {
        res.status(500).json(response.error || 'Some error occurred while updating the contact.');
      }
      } catch (err) {
        res.status(500).json({err})
  }
  };

const deleteFlower = async (req, res) => {
  try {
  const flowerId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDb()
    .db('flowerdb')
    .collection('zone9flowers')
    .deleteOne({ _id: flowerId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
    }
  } catch (err) {
  res.status(500).json({err});
  }
};

module.exports = { 
  getAll, 
  getSingle, 
  createFlower, 
  updateFlower, 
  deleteFlower 
};