import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";

const firebaseConfig = {

    apiKey: "AIzaSyCJCHxA1W7UAZsUXfbfGd0zocn1Og7iDB0",
    authDomain: "ecotech-13e79.firebaseapp.com",
    projectId: "ecotech-13e79",
    storageBucket: "ecotech-13e79.appspot.com",
    messagingSenderId: "69474015528",
    appId: "1:69474015528:web:fcc073e30d48c00ff8d81d",
    measurementId: "G-WFH4FHF69E"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = 'pt';

const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById('google-login-btn');

googleLogin.addEventListener('click', () => {

    signInWithPopup(auth, provider)

        .then((result) => {

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

                    }else if (data.message === 'Usuário não existe e foi registrado!') {

                        window.location.href = '/';
                    }
                    
                })

        })
});