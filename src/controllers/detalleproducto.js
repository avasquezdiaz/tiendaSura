console.log("estoy detalLando la compra")

//llamar a la memoria 
let producto=JSON.parse (localStorage.getItem("producto"))
console.log (producto)

let carrito
if(JSON.parse(localStorage.getItem("carrito"))!=null){
    carrito=JSON.parse(localStorage.getItem ("carrito"))
    let pildora=document.getElementById("pildora")
    pildora.textContent=carrito.length
}

else{
    carrito = []
}



//referenciar la imagen del producto
let foto=document.getElementById("imagenInfo")
foto.src=producto.foto

let precio=document.getElementById("precioInfo")
precio.textContent=producto.precio

let nombre=document.getElementById("nombreInfo")
nombre.textContent=producto.nombre

let descripcion=document.getElementById("descripcionInfo")
descripcion.textContent=producto.descripcion

let pildora=document.getElementById("pildora")
console.log (pildora.textContent)

//escucho clic en el boton añadir carrito
    let botonCarrito=document.getElementById("botonAgregarCarrito")
    botonCarrito.addEventListener("click",function(evento){
    let cantidad=document.getElementById("cantidadProducto")
    cantidad=cantidad.value 
    console.log("agregaste:" +cantidad)   


//agregamos la cantidad al objeto producto
    producto.cantidad=cantidad
    console.log(producto)


//agregramos el producto al carrito de compras
    carrito.push(producto)
    console.log(carrito)

//agregando el carrito a la memoria
    localStorage.setItem("carrito",JSON.stringify(carrito))
    let cantidadCarrito=carrito.length
    pildora.textContent=cantidadCarrito

   




})