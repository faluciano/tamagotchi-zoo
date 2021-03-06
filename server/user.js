import { Router } from 'express';
var user_routes = Router();
import UserModel from './models.js';
import { random } from './animal.js';


const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

// Creates an animal for user
async function createAnimal(id, postal, preference) {
    const animal = await random(postal, preference);
    const color = Math.floor(Math.random()*16777215).toString(16);
    animal.color = color;
    animal.originalName = animal.name;
    const use = {
        "id": id,
        "animal": animal,
    }
    const user = await UserModel.find({ "id": id });
    if (user.length !== 0){
        user[0].animal = animal
        await UserModel.updateOne({"id": id}, { $set: user[0] });
        const userFound = await UserModel.find({ "id": id });
        if (userFound.length === 0) {
            return {};
        }
        return userFound[0].animal;
    }
    else{
        const user1 = new UserModel(use);
        await user1.save();
        const userFound = await UserModel.find({ "id": id });
        if (userFound.length === 0) {
            return {};
        }
        return userFound[0].animal;
    }
}

// Registers a user to the app and assigns an animal
user_routes.post('/createAnimal', async (req, res) => {
    console.log("Creating animal");
    const animal = await createAnimal(req.body.id,req.body.postal, req.body.preference);
    return res.json(animal);
});

// Returns a users animal or empty if the user doesn't exist
user_routes.get('/getAnimal', async (req, res) => {
    const id = req.query.id;
    const user = await UserModel.find({ "id": id });
    // if (user === []){
    //     return res.json({});
    // }
    return res.json(user[0].animal);
});

// Checks if a user exists in db and returns their animal if they do
user_routes.get('/login', async (req, res) => {
    const id = req.query.id;
    const user = await UserModel.find({ "id": id });
    if (user.length === 0) {
        return res.json({});
    }
    return res.json(user[0].animal);
});

// Feeds animal and increases hunger, decreases cleanliness
user_routes.put('/feed', async (req, res) => {
    const id = req.query.id;
    const query = { "id": id };
    let user = await UserModel.find(query);
    let animal = user[0].animal;
    if (animal.hunger >= 80) {
        return res.json({ "accepted": false })
    }

    animal.hunger = clamp(animal.hunger + 60, 0, 100);
    animal.cleanliness = clamp(animal.cleanliness - 10, 0, 100);

    await UserModel.updateOne(query, { $set: { 'animal': animal } });
    return res.json({ "accepted": true });
});

// Pets animal and increases hapiness, decreases hunger
user_routes.put('/pet', async (req, res) => {
    const id = req.query.id;
    const query = { "id": id };
    let user = await UserModel.find(query);
    let animal = user[0].animal;
    if (animal.happiness >= 80) {
        return res.json({ "accepted": false })
    }

    animal.happiness = clamp(animal.happiness + 60, 0, 100);
    animal.hunger = clamp(animal.hunger - 10, 0, 100);

    await UserModel.updateOne(query, { $set: { 'animal': animal } });
    return res.json({ "accepted": true });
});

// Cleans animal and increases cleanliness to max
user_routes.put('/clean', async (req, res) => {
    const id = req.query.id;
    const query = { "id": id };
    let user = await UserModel.find(query);
    let animal = user[0].animal;

    if (animal.cleanliness === 100) {
        return res.json({ "accepted": false })
    }

    animal.cleanliness = 100;

    await UserModel.updateOne(query, { $set: { 'animal': animal } });
    return res.json({ "accepted": true });
});

// Deletes a user
user_routes.get('/delete', async(req, res)=>{
    const id = req.query.id;
    await UserModel.deleteOne({'id':id});
    res.json({"deleted":true});
});

user_routes.put('/changeName', async(req,res)=>{
    const id = req.query.id;
    const name = req.query.name;
    let user = await UserModel.find({"id":id});
    user[0].animal.name = name
    await UserModel.updateOne({"id":id}, { $set: { 'animal': user[0].animal } });
    res.json({"accepted":"named changed to "+name})
})

export default user_routes;