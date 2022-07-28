let boton=document.getElementById ("boton")

//pasos para detectar eventos (funcion sin nombre o anomina)
boton.addEventListener("click",function(){
    
    let nombre=document.getElementById("nombre").value 
    let saludo=document.getElementById("saludo")
    saludo.textContent="hola " + nombre + " como estas"
})