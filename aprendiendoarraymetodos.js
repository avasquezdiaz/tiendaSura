/*
let numeros=[25,60,80,100,25,60,80,100]

//recorrer un arreglo 
//esculcar/obtener de a un elemento

//1.forEach
numeros.forEach(function(numero){
    console.log(numero)
})
*/

let productos=[
    {

        nombre:"Antioquia coffee",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasura-80b34.appspot.com/o/Antioquia1.jpg?alt=media&token=984ee528-6e6e-4ccb-926a-d2e060954d79","https://firebasestorage.googleapis.com/v0/b/tiendasura-80b34.appspot.com/o/Antioquia2.1.jpg?alt=media&token=b7938cd8-c8ce-45a7-9d76-971e89f24119"],
        precio:26900,
        popularidad:5,
        descripcion:"Café de origen balanceado con notas de sabor a panela, ciruela roja y manzana roja. Contenido:454gr",
    },
    {
        nombre:"Cumbre coffee",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasura-80b34.appspot.com/o/Cumbre3.jpg?alt=media&token=9093d58e-00b0-43f0-a42b-67c74a690b83", "https://firebasestorage.googleapis.com/v0/b/tiendasura-80b34.appspot.com/o/CUMBRE3.1.webp?alt=media&token=36249014-8b7d-412a-acda-02859e718411"],
        precio:21900,
        popularidad:3,
        descripcion:"Café fuerte con notas de sabor a uva semiseca, cocoa y té. Contenido:454gr ",
    },

    {
        nombre:"Tolima coffee",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasura-80b34.appspot.com/o/tolima1.jpg?alt=media&token=c99a8a6c-0a09-4dc8-89dd-472242da0a73","https://firebasestorage.googleapis.com/v0/b/tiendasura-80b34.appspot.com/o/tolima1.1.webp?alt=media&token=77f470dc-e220-47d6-bec1-0eb3c0c5aae6"],
        precio:25000,
        popularidad:0,
        descripcion:"Es un Café suave con notas a frambuesa. Contenido:454gr",
    },


]

let fila=document.getElementById("fila")

//recorrer un arreglo
productos.forEach(function(producto){
    //creadno un div desde js
    let columna=document.createElement("div")
    columna.classList.add("col")

    //creando una tarjeta
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow","text-center","h-100")

    //creando imagen
    let imagen=document.createElement("img")
    imagen.classList.add("img-fluid", "w-100")
    imagen.src=producto.fotos [0]

    //creando evento de mouse
    imagen.addEventListener("mouseover", function(){
        imagen.src=producto.fotos [1]

    })

    imagen.addEventListener("mouseleave",function(){
        imagen.src=producto.fotos [0]

    })


    //crear el nombre
    let nombre=document.createElement("h3")
    nombre.classList.add("fw-bold")
    nombre.textContent=producto.nombre

    //crear el precio
    let precio=document.createElement("p")
    precio.classList.add("fw-bold")
    precio.textContent=producto.precio


    

    //definiendo padres de hijos (se inicia de lo mas interno)
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)


})