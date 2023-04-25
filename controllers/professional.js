const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;const mongodb = require('../db/connect');

const getData = async(req, res, next) => {
    const result = await mongodb.getDb().db().collection('users').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]); 
    });
};

module.exports = { getData};