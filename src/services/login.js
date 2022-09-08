import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"

let email=document.getElementById("userlogin").value
let password=document.getElementById("passwordlogin").value
let botonlogin=document.getElementById("botonlogin")




    let ingresar=() => {

        console.log(email)
        console.log(password)
    }
    
    botonlogin.addEventListener("click",ingresar)
       

    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });






