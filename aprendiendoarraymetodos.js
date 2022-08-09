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
        descripcion:"Balanced origin coffee with flavor notes of panela, red plum and red apple. Content:454gr",
    },
    {
        nombre:"Cumbre coffee",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasura-80b34.appspot.com/o/Cumbre3.jpg?alt=media&token=9093d58e-00b0-43f0-a42b-67c74a690b83", "https://firebasestorage.googleapis.com/v0/b/tiendasura-80b34.appspot.com/o/CUMBRE3.1.webp?alt=media&token=36249014-8b7d-412a-acda-02859e718411"],
        precio:21900,
        popularidad:3,
        descripcion:"Strong coffee with flavor notes of semidry grapes, cocoa and tea. Content:454gr",
    },

    {
        nombre:"Tolima coffee",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasura-80b34.appspot.com/o/tolima1.jpg?alt=media&token=c99a8a6c-0a09-4dc8-89dd-472242da0a73","https://firebasestorage.googleapis.com/v0/b/tiendasura-80b34.appspot.com/o/tolima1.1.webp?alt=media&token=77f470dc-e220-47d6-bec1-0eb3c0c5aae6"],
        precio:25000,
        popularidad:0,
        descripcion:"Es un Café suave con notas a frambuesa. Contenido:454gr",
    },

    {
        nombre:"Cundimanarca coffee",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasura-80b34.appspot.com/o/Cundinamarca5.jpg?alt=media&token=7cc46ec1-5d18-42f8-b596-82d3b4eeaadb","https://firebasestorage.googleapis.com/v0/b/tiendasura-80b34.appspot.com/o/CUNDINAMARCA5.1.webp?alt=media&token=c78eda1c-9de6-4b23-b718-a216e0ecbd5f"],
        precio:27000,
        popularidad:0,
        descripcion:"It is a soft coffee with notes of raspberry. Content:454gr",
    },

    {
        nombre:"Nariño coffee",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasura-80b34.appspot.com/o/Narino4.jpg?alt=media&token=0fcaa45b-a9fe-4ecd-ba1e-7437496a7f6f","https://firebasestorage.googleapis.com/v0/b/tiendasura-80b34.appspot.com/o/NARIN%CC%83O4.1.webp?alt=media&token=2c0ce876-3b1b-4c53-b53a-8e924f9ae0f5"],
        precio:24000,
        popularidad:0,
        descripcion:"It is a soft coffee with citrus notes and exquisite acidity. Content:454gr",
    },

    {
        nombre:"decaffeinated summit coffee",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasura-80b34.appspot.com/o/Cumbre%20Decafeinado.png?alt=media&token=73affcfc-f0e2-46b2-9fb3-96075e2a4e33",""],
        precio:27000,
        popularidad:5,
        descripcion:"It is a coffee with character with light sweet notes of semi-dry grapes and a prolonged coffee flavor. Content:454gr",
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
    let precio=document.createElement("h2")
    precio.classList.add("fw-bold")
    precio.textContent=producto.precio

    //creando descripcion
    let descripcion=document.createElement("P")
    descripcion.classList.add("text-danger","d-none")
    descripcion.textContent=producto.descripcion

    //creando popularidad
    let popularidad=document.createElement("h4")
    popularidad.classList.add("fw-bold")
    popularidad.textContent=producto.popularidad
       

    //definiendo padres de hijos (se inicia de lo mas interno)
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(descripcion)
    tarjeta.appendChild(popularidad)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)


})