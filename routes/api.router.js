    
/*
Configurer le module de route
*/
    const express = require('express');
    const router = express.Router();
    const UserModel = require('../models/user.model');
    const bcrypt = require('bcryptjs');
//

/*
Route auth
*/
    // Register user
    router.post('/auth/register', (req, res) => {
        return new Promise( (resolve, reject) => {
            // Check client values
            if( 
                req.body &&
                req.body.pseudo.length > 4 &&
                req.body.email.length > 4 &&
                req.body.password.length > 4
            ){
                // Set server data
                req.body.creationDate = new Date();

                
                    // Hash user password
                    bcrypt.hash(req.body.password, 10)
                    .then( hashedPassword => {
                        // Change user password
                        req.body.password = hashedPassword;
                        
                        // Register new user
                        UserModel.create(req.body)
                        .then( userData => {
                            return resolve(res.json({ msg: 'User registrated', data: userData }))
                        })
                        .catch( error => {
                            return reject(res.json({ msg: 'User not registrated', data: error }))
                        })

                    })
                    .catch( errorBycrypt => {
                        return reject(res.json({ msg: 'User not registrated', data: errorBycrypt }))
                    })
                
            }
            else{
                return res.json({ msg: 'No data', data: null })
            }
        })
    });

    // Log user
    router.post('/auth/login', (req, res) => {
        return new Promise( (resolve, reject) => {
            // Check client values
            if( 
                req.body &&
                req.body.email.length > 4 &&
                req.body.password.length > 4
            ){
                
                return res.json({ msg: 'No data', data: null })
                
            }
            else{
                return res.json({ msg: 'No data', data: null })
            }
        })
    });
//


/*
Exporter le module de route
*/
    module.exports = router;
//