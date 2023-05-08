const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;


const getAll = async (req, res) => {
  try {
  const result = await mongodb.getDb().db().collection('contacts').find();
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
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('contacts').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    //res.setHeader('Content-Type', 'text/plain');
    res.status(200).json(lists[0]);
  })
  } catch (err) {
    res.status(500).json({err});
  }
};

const createContact = async (req, res) => {
  try {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birdthday: req.body.birthday
  };
  console.log(req.body);
  const response = await mongodb.getDb().db().collection('contacts').insertOne(contact);
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

const updateContact = async (req, res) => {
  try {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .replaceOne({ _id: userId }, contact);
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

const deleteContact = async (req, res) => {
  try {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .deleteOne({ _id: userId }, true);
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
  createContact, 
  updateContact, 
  deleteContact 
};