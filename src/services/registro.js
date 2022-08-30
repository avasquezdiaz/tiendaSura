
import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"


let botonregistro=document.getElementById("botonregistro")

botonregistro.addEventListener("click",function(evento){
    
    evento.preventDefault()


    let email=document.getElementById("correo").value
    let password=document.getElementById("Password").value

    console.log(email,password)

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    alert("registro exitoso") 
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert("upss fallamos:" +error.message)
    // ..
    });

})