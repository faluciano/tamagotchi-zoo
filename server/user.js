const routes = require('express').Router();

// Registers a user to the app and assigns an animal
routes.post('/registerUser', (req,res)=>{
    console.log("Registering user");
  
    return res.send('User created successfully');
});

module.exports = routes