const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};


const createContact = async(req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birdthday: req.body.birthday
  };
  const response = await mongodb.getDb().db().collection('contacts').insertOne(contact);
  if(response.acknowledged) {
    res.status(201).json(response);
  }else {
    res.status(500).json(response.error || 'Some error occurred while creating contact');
  }
};



module.exports = { getAll, getSingle, createContact };