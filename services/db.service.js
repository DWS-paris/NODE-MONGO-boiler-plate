/*
Import
*/
    const mongoose = require('mongoose')
//

/*
Config
*/
    const mongoConnect = () => {
        return new Promise( (resolve, reject) => {
            mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
            .then( db => resolve( { db: db, url: process.env.MONGO_URL } ))
            .catch( error => reject(`MongoDB not connected`, error) )
        })
    }
//

/*
Export
*/
    module.exports = mongoConnect;
//