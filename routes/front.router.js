    
/*
Configurer le module de route
*/
    const express = require('express');
    const router = express.Router();
//

/*
Définition des routes
*/
    // Accueil
    router.get('/', (req, res) => {
        res.render('index', { title: 'Bienvenue sur VoxPopulis', isLogged: false });
    });

    // Inscription
    router.get('/register', (req, res) => {
        res.render('register', { title: 'Créez votrer compte', isLogged: false });
    });

    // Connexion
    router.get('/login', (req, res) => {
        res.render('login', { title: 'Connectez-vous', isLogged: false });
    });

    // Deconnexion
    router.get('/logout', (req, res) => {
        res.clearCookie(process.env.COOKIE_NAME)
        return res.redirect('/')
    });

    // Mon compte
    router.get('/me', (req, res) => {
        res.render('me', { title: 'Mon compte', isLogged: false });
    });
//


/*
Exporter le module de route
*/
    module.exports = router;
//