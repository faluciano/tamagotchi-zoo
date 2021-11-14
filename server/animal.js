const routes = require('express').Router();
const PETID = process.env.PETID;
const PETSECRET = process.env.PETSECRET;
const axios = require('axios');
const peturl = "https://api.petfinder.com";


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

routes.get('/animals', async (req, res)=>{
    const token = await getToken()
    const animals = await getAnimals(token);
    return res.json(filterAnimals(animals));
});

module.exports = routes;