// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { doc, setDoc, getFirestore } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEczeiPCznV-sW9lYSY1DDv7gVI323XgM",
    authDomain: "ejcontiempo1.firebaseapp.com",
    projectId: "ejcontiempo1",
    storageBucket: "ejcontiempo1.appspot.com",
    messagingSenderId: "721773449122",
    appId: "1:721773449122:web:e935d594740d2dd2a7ecfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Add a new document in collection "cities"

function generateRandomIdTask(num) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < num; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
async function insert(email, pass){
 await setDoc(doc(db, "Usuarios", generateRandomIdTask(20)), {
        email: email,
        pass: pass,
    });
    alert("Registro finalizado con exito");
    location.reload();
}
const boton = document.getElementById("boton");
boton.addEventListener("click",  () => {
        var email = document.getElementById("email").value
        var pass = document.getElementById("pass").value
            insert(email, pass);
        });
 