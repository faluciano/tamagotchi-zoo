import { config } from 'dotenv';
config();
import express from 'express';
import mongoose from 'mongoose';
const app = express();
import {animal_routes} from './animal.js';
import user_routes from './user.js';

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

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use( '/', animal_routes);
app.use('/',user_routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default db;