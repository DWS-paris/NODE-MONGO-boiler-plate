    
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
    // Create Item: POST
    router.post('/auth/register', (req, res) => {
        // Check client values
        if( 
            req.body &&
            req.body.pseudo.length > 4 &&
            req.body.email.length > 4 &&
            req.body.password.length > 4
        ){
            

            return new Promise( (resolve, reject) => {
                return resolve(res.json({ msg: 'Data sended', data: null }))
            })
            

        }
        else{
            return res.json({ msg: 'No data', data: null })
        }
    });
//


/*
Exporter le module de route
*/
    module.exports = router;
//