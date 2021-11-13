require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3001;

// Mongoose connection
mongoose.connect(
  process.env.MONGO
).catch(()=>console.log("Something went wrong dude"));

// db 
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));

db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});