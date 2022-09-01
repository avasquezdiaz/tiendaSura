import {getAuth, signOut} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"


let botonsalir=document.getElementById("botonsalir")
botonsalir.addEventListener("click", function(evento){
    
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'thank, bye',
    showConfirmButton: false,
    timer: 1500
  })
  window.location.href="./index.html"
}).catch((error) => {
  // An error happened.
});
})

