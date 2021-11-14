import { Router } from 'express';
var user_routes = Router();
import UserModel from './models.js';
import { random } from './animal.js';

// Creates an animal for user
async function createAnimal(id, postal, preference){
    const animal = await random(postal, preference);
    const use = {
        "id":id,
        "animal":animal
    }
    const user1 = new UserModel(use);
    user1.save()
    return animal;
}

// Registers a user to the app and assigns an animal
user_routes.post('/createAnimal', async (req,res)=>{
    console.log("Creating animal");
    const animal = await createAnimal(req.body.id,req.body.postal, req.body.name);
    return res.json(animal);
});

// Returns a users animal or empty if the user doesn't exist
user_routes.get('/getAnimal', async (req,res)=>{
    const id = req.query.id;
    const user = await UserModel.find({"id":id});
    // if (user === []){
    //     return res.json({});
    // }
    return res.json(user[0].animal);
});

// Checks if a user exists in db and returns their animal if they do
user_routes.get('/login', async (req, res) => {
    const id = req.query.id;
    const user = await UserModel.find({"id":id});
    if (user === []){
        return res.json({});
    }
    return res.json(user[0].animal);
});

export default user_routes;