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
Method generateJwt()
Generate a user access token
*/
userSchema.methods.generateJwt = (data) => {
    // The access token expired in 60 days
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 59);

    /**
     * JWT sign() method
     * @param object => all the data nedded for the access token
     * @param JWT_SECRET => secure key to hash the access token (cf. '.env')
     * @return => hashed user access token
    */
        return jwt.sign({
            _id: data._id,
            password: data.password,
            creationDate: data.creationDate,
            expireIn: '10s',
            exp: parseInt(expiry.getTime() / 100, 10)
        }, process.env.JWT_SECRET );
    //
}
//

/*
Export
Create a const that use the Mongoose schema to declare an objet model
*/
    const UserModel = mongoose.model('user', userSchema);
    module.exports = UserModel;
//