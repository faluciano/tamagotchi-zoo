import {Router} from 'express';
import { config } from 'dotenv';
config();
const PETID = process.env.PETID;
const PETSECRET = process.env.PETSECRET;
import axios from 'axios';
const peturl = "https://api.petfinder.com";

var animal_routes = Router();

// Generates a token for petfinder api
async function getToken(){
    const options = {
        'grant_type':'client_credentials',
        'client_id':PETID,
        'client_secret':PETSECRET
    };
    const token = await axios.post(peturl+'/v2/oauth2/token',
        options
    ).catch(er=>console.error(er))
    return token.data.access_token
}

// Retrieves a list of animals of any kind
async function getAnimals(token,postal,preference){
    const options = {
        'headers':{
            "Content-Type":"application/json",
            "Authorization": "Bearer "+token
        }
    }
    let url = peturl+'/v2/animals'
    if (postal) {
        options.params ={"location":postal,"distance":25,"type":preference};
    } 
    const animals = await axios.get(url,
        options
    )
    .catch(er=>console.error(er))
    return animals.data.animals
}

// Retrieves a list of species 
async function getSpecies(token){
    const options = {
        'headers':{
            "Content-Type":"application/json",
            "Authorization": "Bearer "+token
        }
    }
    const species = await axios.get(peturl+'/v2/types',
        options
    )
    .catch(er=>console.error(er))
    return species.data.types
}

// Filters out the uneeded data from a list of animals
function filterAnimals(animals){
    const filtered_animals = animals.map(animal=>{
        return {
            'name': animal.name,
            'species': animal.species,
            'age': animal.age,
            'contact': animal.contact,
            'photos': animal.photos.map(photo=>photo.full)
        }
    })
    return filtered_animals
}

// Filters out the uneeded data from a list of species
function filterSpecies(species){
    const filtered_species = species.map(specie=>{
        return {
            'name': specie.name,
        }
    })
    return filtered_species
}

// Returns a list of animals taking in a location as a parameter
animal_routes.get('/animals', async (req, res)=>{
    const token = await getToken();
    const animals = await getAnimals(token,req.query.postal,req.query.preference);
    return res.json(filterAnimals(animals));
});

// Returns a list of species
animal_routes.get('/getSpecies', async (req, res)=>{
    const token = await getToken();
    const species = await getSpecies(token);
    return res.json(filterSpecies(species));
});

// Returns a random animal
async function random(postal){
    const token = await getToken();
    const animals = await getAnimals(token,postal);
    return filterAnimals(animals)[Math.floor(Math.random()*animals.length)];
};

export { animal_routes, random}