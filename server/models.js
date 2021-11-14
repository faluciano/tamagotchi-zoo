import mongoose from "mongoose";

var UserSchema = new mongoose.Schema({
    id : String,
    animal: {
        name: String,
        species: String,
        age: String,
        photos: [],
        hunger: {
            type: Number,
            default: 100
        },
        happiness: {
            type: Number,
            default: 100
        },
        cleanliness: {
            type: Number,
            default: 100
        },
        sleepiness: {
            type: Number,
            default: 100
        } 
    },
    postal: String
});

export default UserSchema;