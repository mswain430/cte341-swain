//const express = require('express');
//const bodyParser = require('body-parser');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;


const getAll = async (req, res) => {
  try {
  const result = await mongodb.getDb().db('flowerdb').collection('contacts').find();
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
    if(!ObjectId.isValid(req.params.id)){
      res.status(400).json('Must use a valid contact id to fine a flower instance')
    }
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('flowerdb').collection('contacts').find({ _id: userId });
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
      address: req.body.address,
      email: req.body.email,
      zipcode: req.body.zipcode,
      cellphone: req.body.cellphone,
    };
    console.log(req.body);

    const response = await mongodb.getDb().db('flowerdb').collection('contacts').insertOne(contact);
    if (response.acknowledged) {
      res.status(201).json(response);
     // res.setHeader('Content-Type', 'text/plain');
      } else {
        res.status(500).json(response.error || 'Some error occurred while creating contact');
      }
  } catch (err) {
    res.status(500).json(err); 
  }
};

const updateContact = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid contact id to fine a flower instance') }
    const userId = new ObjectId(req.params.id);
    // be aware of updateOne if you only want to update specific fields
    const contact = {
      $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        email: req.body.email,
        zipcode: req.body.zipcode,
        cellphone: req.body.cellphone,
      }
    }
     const response = await mongodb
      .getDb()
      .db('flowerdb')
      .collection('contacts')
      .replaceOne({ _id: userId }, contact);
      console.log(response);
      if (response.modifiedCount > 0) {
        res.status(204).send();
      } else {
        res.status(500).json(response.error || 'Some error occurred while updating the contact.');
      }
};

const deleteContact = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid contact id to fine a flower instance') 
    }
    const userId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db('flowerdb')
      .collection('contacts')
      .deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
    }
 };

module.exports = { 
  getAll, 
  getSingle, 
  createContact, 
  updateContact, 
  deleteContact 
};