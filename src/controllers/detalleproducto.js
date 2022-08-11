console.log("estoy detalLando la compra")

//llamar a la memoria 
let producto=JSON.parse (localStorage.getItem("producto"))
console.log (producto)

//referenciar la imagen del producto
let foto=document.getElementById("imagenInfo")
foto.src=producto.foto

let precio=document.getElementById("precioInfo")
precio.textContent=producto.precio

let nombre=document.getElementById("nombreInfo")
nombre.textContent=producto.nombre

let descripcion=document.getElementById("descripcionInfo")
descripcion.textContent=producto.descripcion