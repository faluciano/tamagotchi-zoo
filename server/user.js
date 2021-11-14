import { Router } from 'express';
import mongoose from 'mongoose';
var user_routes = Router();
import UserSchema from './models.js';
import { random } from './animal.js';

// Creates an animal for user
async function createAnimal(id, postal, preference){
    const animal = await random(postal, preference);
    const use = {
        "id":id,
        "animal":animal
    }
    var User = mongoose.model('User',UserSchema,'users');
    const user1 = new User(use);
    user1.save()
    return animal;
}


// Registers a user to the app and assigns an animal
user_routes.post('/createAnimal', async (req,res)=>{
    console.log("Creating animal");
    const animal = await createAnimal(req.body.id,req.body.postal, req.body.name);
    return res.json(animal);
});

export default user_routes;