import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCsAvA-7jRUovyvslDdw465v8o0FQGeR3Y",
    authDomain: "memoriando-71484.firebaseapp.com",
    projectId: "memoriando-71484",
    storageBucket: "memoriando-71484.appspot.com",
    messagingSenderId: "669283409054",
    appId: "1:669283409054:web:8dc2bf96a64dd374a22f8f",
    measurementId: "G-0MG2E9MYY6"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = 'pt';

const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById('google-login-btn');

googleLogin.addEventListener('click', () => {

    signInWithPopup(auth, provider)

        .then((result) => {

            const credential = GoogleAuthProvider.credentialFromResult(result);

            const user = result.user;

            var data = {
                
                nome_usuario: user.displayName,
                email_usuario: user.email,
                senha_usuario: user.uid,
                cpf_usuario: '',
                telefone_usuario: ''

            };

            console.log(data);

            fetch('/usuario/registerUsuario', {

                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(data)

            })

            .then(response => response.json())
            
            .then(data => {

                console.log(data.message);

                if (data.message === 'Usuário já existe!') {

                    window.location.href = '/';

                }

            })

    })});