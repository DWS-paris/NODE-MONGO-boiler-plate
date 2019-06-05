/*
Import
*/
    // Mongoose
    const mongoose = require('mongoose')
    const { Schema } = mongoose;

    // Javascript Web Token
    const jwt = require('jsonwebtoken');
//

/*
Mongoose schema deefinition
Declare each property and type needed for the schema
*/
    const userSchema = new Schema({
        email: { type: String, unique: true },
        password: String,
        pseudo: String,
        creationDate: Date
    })
//



/*
Export
Create a const that use the Mongoose schema to declare an objet model
*/
    const UserModel = mongoose.model('user', userSchema);
    module.exports = UserModel;
//