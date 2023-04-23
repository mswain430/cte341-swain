/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mongodbVSCodePlaygroundDB');

// Insert a few documents into the contacts collection.
db.getCollection('contacts').insertMany([
  {
    "firstName": "Ryan",
    "lastName": "Alvord",
    "email": "ralvord@byui.edu",
    "favoriteColor": "blue",
    "birthday": "06/19/2000"
    },
    {
    "firstName": "Tulio Ricardo",
    "lastName": "Banegas Izaguirre",
    "email": "tizaguirre@byui.edu",
    "favoriteColor": "blue",
    "birthday": "06/19/2000"
    },
    {
    "firstName": "Peace Andrew",
    "lastName": "Arikpo",
    "email": "parikpo@byui.edu",
    "favoriteColor": "blue",
    "birthday": "06/19/2000"
    },
    {
    "firstName": "Sheyla",
    "lastName": "Norton",
    "email": "snorton@byui.edu",
    "favoriteColor": "blue",
    "birthday": "06/19/2000"
    },
    {
    "firstName": "Melanie",
    "lastName": "Michaels",
    "email": "mmichaels@byui.edu",
    "favoriteColor": "green",
    "birthday": "06/19/2000"
    }
]);

// Run a find command to view items sold on April 4th, 2014.
const bdatesIn2000 = db.getCollection('contacts').find({
  date: { $gte: new Date('2000-06-19'), $lt: new Date('2000-06-19') }
}).count();

// Print a message to the output window.
console.log(`${bdatesIn2000} birthdays occurred in 2000.`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
//db.getCollection('contacts').aggregate([
  // Find all of the sales that occurred in 2014.
 // { $match: { date: { $gte: new Date('2020-06-19'), $lt: new Date('2020-06-19') } } },
  // Group the total sales for each product.
//  { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
//]);
