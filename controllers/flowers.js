const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const Joi = require('joi');
const schema = Joi.object({ 
  flowerName: Joi.string().required().empty(),
  img: Joi.string().required().empty(),
  desc: Joi.string().required().empty(), 
  zone: Joi.string().required().empty(), 
  bloomTime: Joi.string().required().empty(), 
  exposure: Joi.string().required().empty(), 
  zipcode: Joi.number().required().empty(),
  type: Joi.string().required().empty()
 });

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
  if (!ObjectId.isValid(req.params.id)) {
  res.status(400).json('Must use a valid flower id to fine a flower instance') }
  const flowerId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('flowerdb').collection('flowers').find({ _id: flowerId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createFlower = async (req, res) => {
 // try { const { error } = schema.validate(req.body); if (error) { return res.status(400).json({ error: error.details[0].message }); }
    const flower = {
      flowerName: flowerName,
      img: img,
      desc: desc,
      zone: zone,
      bloomTime: bloomTime,
      exposure: exposure,
      zipcode: zipcode,
      type: type
    };
    console.log(req.body);
  
    try {
      const response = await mongodb 
        .getDb()
        .db('flowerdb')
        .collection('flowers')
        .insertOne(flower);
      if (response.acknowledged) {
        res.status(201).json(response);
        //res.setHeader('Content-Type', 'text/plain');
      } else {
      res.status(500).json(response.error || 'Some error occurred while creating contact');
      }
    } catch (err) { res.status(500).json({ message: err.message }); 
  }
};

const updateFlower = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid contact id to fine a flower instance')  }
    const flowerId = new ObjectId(req.params.id);
    // be aware of updateOne if you only want to update specific fields
    const flower = {
      $set: {
        flowerName: req.body.flowerName,
        img: req.body.img,
        desc: req.body.desc,
        zone: req.body.zone,
        bloomTime: req.body.bloomTime,
        exposure: req.body.exposure,
        zipcode: req.body.zipcode,
        type: req.body.type,
    }
  };
  const response = await mongodb.getDb().db('flowerdb').collection('flowers').updateOne({ _id: flowerId }, flower);
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