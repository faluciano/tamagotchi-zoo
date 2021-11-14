import mongoose from "mongoose";

var UserSchema = new mongoose.Schema({
    id : {
        "type": "String"
    },
    animal: {
        "name": {
            "type": "String"
        },
        "species": {
            "type": "String"
        },
        "age": {
            "type": "String"
        },
        "gender": {
            "type": "String"
        },
        "contact": {
            "email": {
                "type": "String"
            },
            "phone": {
                "type": "String"
            },
            "address": {
                "address1": {
                "type": "Mixed"
                },
                "address2": {
                "type": "Mixed"
                },
                "city": {
                "type": "String"
                },
                "state": {
                "type": "String"
                },
                "postcode": {
                "type": "Date"
                },
                "country": {
                "type": "String"
                }
            }
        },
        "photos": {
            "type": [
                "String"
            ]
        },
        "hunger": {
            "type": "Number",
            "default": 100
        },
        "happiness": {
            "type": "Number",
            "default": 100
        },
        "cleanliness": {
            "type": "Number",
            "default": 100
        },
        "sleepiness": {
            "type": "Number",
            "default": 100
        },
        "color": {
            "type": "String"
        }
    },
});

const UserModel = mongoose.model('User',UserSchema,'users');

export default UserModel;