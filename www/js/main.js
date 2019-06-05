document.addEventListener('DOMContentLoaded', () => {

    // Déclaration
    const homePage = document.querySelector('.home-page')
    const registerPage = document.querySelector('.register-page')
    const loginPage = document.querySelector('.login-page')
    const mePage = document.querySelector('.me-page')

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
                console.log('%cFormulaire validé', 'font-size: 5rem');
            } 
            else{ 
                console.log('%cFormulaire non-validé', 'color: blue; font-size: 5rem');
            }
        })
    }
    if(loginPage != null){
        console.log('Login')
    }
    if(mePage != null){
        console.log('Me')
    }
})