document.addEventListener('DOMContentLoaded', () => {

    // Déclaration
    const homePage = document.querySelector('.home-page')
    const registerPage = document.querySelector('.register-page')
    const loginPage = document.querySelector('.login-page')
    const mePage = document.querySelector('.me-page')

    // Method asyncFetch
    const asyncFetch = (path, type = "GET", data = null) => {
        return new Promise( async (resolve, reject) => {
            // Check request type
            if( type === "GET" ){
                // Fetch request
                const response = await fetch(path)

                // Check response
                if(response.ok){
                    // Convert response in JSON
                    const jsonResponse = await response.json();

                    return resolve(jsonResponse)
                }
                else{
                    return reject('Fetch error: ' + response.error)
                }

            }
            else if(type === "POST"){
                // Fetch request
                const response = await fetch(path, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })

                // Check response
                if(response.ok){
                    // Convert response in JSON
                    const jsonResponse = await response.json();

                    return resolve(jsonResponse)
                }
                else{
                    return reject('Fetch error: ' + response.error)
                }
            }
        })
        
    }

    // Method to display navigation
    asyncFetch('/api/auth/me')
    .then( () => {
        document.querySelector('#mainNav').innerHTML = `
            <li><a href="/">Accueil</a></li>
            <li><a href="/logout">Déconnexion</a></li>
            <li><a href="/me">Mon compte</a></li>
        `
    })
    .catch( () => {
        document.querySelector('#mainNav').innerHTML = `
            <li><a href="/">Accueil</a></li>
            <li><a href="/register">Inscription</a></li>
            <li><a href="/login">Connexion</a></li>
        `
    })

    // Vérifier la page active
    if(homePage != null){
        console.log('Home')
    }
    if(registerPage != null){
        // Déclaration
        const registerForm = document.querySelector('#registerForm')
        const pseudo = document.querySelector('#pseudo')
        const email = document.querySelector('#email')
        const password = document.querySelector('#password')
        const repeat = document.querySelector('#repeat')

        //Capter la soumission
        registerForm.addEventListener('submit', event => {
            event.preventDefault();

            // Check value
            if(
                pseudo.value.length > 1 &&
                email.value.length > 4 &&
                password.value.length > 4 &&
                password.value === repeat.value

            ){
                // Register new user
                asyncFetch('/api/auth/register', 'POST', {
                    pseudo: pseudo.value,
                    email: email.value,
                    password: password.value
                })
                .then( apiResponse => location = '/login')
                .catch( apiError => console.error(apiError))
            } 
            else{ 
                console.log('Formulaire non-validé');
            }
        })
    }
    
    /* 
    Login page
    */
        if(loginPage != null){
            // Déclaration
            const loginForm = document.querySelector('#loginForm')
            const email = document.querySelector('#email')
            const password = document.querySelector('#password')

            //Capter la soumission
            loginForm.addEventListener('submit', event => {
                event.preventDefault();

                // Check value
                if(
                    email.value.length > 4 &&
                    password.value.length > 4
                ){
                    // Register new user
                    asyncFetch('/api/auth/login', 'POST', {
                        email: email.value,
                        password: password.value
                    })
                    .then( () => location = '/')
                    .catch( apiError => console.error(apiError))
                }
                else{ 
                    console.log('Formulaire non-validé');
                }
            })
        }
    //

    if(mePage != null){
        // Check if userr is connected
        asyncFetch('/api/auth/me')
        .then( apiResponse => console.log(apiResponse))
        .catch( apiError => location = '/')
    }
})