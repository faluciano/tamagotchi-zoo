require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const animal = require('./animal');
const user = require('./user');

const port = process.env.PORT || 3001;
const MONGO = process.env.MONGO;

// Mongoose connection
mongoose.connect(
  MONGO
).catch(()=>console.log("Something went wrong dude"));

// db 
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));

db.once("open", function () {
  console.log("Connected to db successfully");
});

app.use( '/', animal);
app.use('/',user);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});