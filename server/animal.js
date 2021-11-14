const routes = require('express').Router();
const PETID = process.env.PETID;
const PETSECRET = process.env.PETSECRET;
const axios = require('axios');
const peturl = "https://api.petfinder.com";

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
async function getAnimals(token){
    const options = {
        'headers':{
            "Content-Type":"application/json",
            "Authorization": "Bearer "+token
        }
    }
    const animals = await axios.get(peturl+'/v2/animals',
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
    filtered_animals = animals.map(animal=>{
        return {
            'name': animal.name,
            'species': animal.species,
            'age': animal.age,
            'photos': animal.photos.map(photo=>photo.full)
        }
    })
    return filtered_animals
}

// Filters out the uneeded data from a list of species
function filterSpecies(species){
    filtered_species = species.map(specie=>{
        return {
            'name': specie.name,
        }
    })
    return filtered_species
}

routes.get('/animals', async (req, res)=>{
    const token = await getToken();
    const animals = await getAnimals(token);
    return res.json(filterAnimals(animals));
});

routes.get('/species', async (req, res)=>{
    const token = await getToken();
    const species = await getSpecies(token);
    return res.json(filterSpecies(species));
});

module.exports = routes;