let etiquetaBoton=document.getElementById ("boton")

//pasos para detectar eventos (funcion sin nombre o anomina)
etiquetaBoton.addEventListener("click",function(){
    console.log("estoy haciendo clic")
    let titulo=document.getElementById("titulo")
    titulo.textContent="hola soy Andrea"
    let mensaje=document.getElementById ("mensaje")
    mensaje.textContent="mentiras van a ganar"
    mensaje.classList.add ("text-danger")
    let caja=document.getElementById("caja")
    mensaje.textContent="hola soy Andrea"
    

    
    
})