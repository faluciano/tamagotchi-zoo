import { Router } from 'express';
import mongoose from 'mongoose';
import db from './server.js';
var user_routes = Router();
import UserSchema from './models.js';
import { random } from './animal.js';

// Creates an animal for user
function createAnimal(id, postal, preference){
    // random
    const animal = {
        
    }
    console.log({'id':id,'postal':postal,'preference':preference});
    // var User = mongoose.model('User',UserSchema,'users');
    // user = new user({
    //     id:id,
    //     name
    // })
    //db.users.insertOne()
}


// Registers a user to the app and assigns an animal
user_routes.post('/registerUser', (req,res)=>{
    console.log("Registering user");
    createAnimal(req.query.postal, req.query.name);
    return res.send('User created successfully');
});

export default user_routes;