//pasos para controlar una etiqueta en JS

//1. controlando el contenido

let etiquetaTitulo=document.getElementById("titulo")
let etiquetaImagen=document.getElementById("foto")
console.log(etiquetaTitulo)

//1.1 manipulando el texto de la etiqueta (elemento)
etiquetaTitulo.textContent="Jefe usted es como mi padre"

//1.2manipulando la fuente 
etiquetaImagen.src="https://firebasestorage.googleapis.com/v0/b/tiendasura-80b34.appspot.com/o/CUNDINAMARCA5.1.webp?alt=media&token=c78eda1c-9de6-4b23-b718-a216e0ecbd5f"

//2.controlando el diseño
let parrafo=document.getElementById("parrafo")
parrafo.textContent="La historia inicia con los recuerdos del Aviador personaje desde cuyo punto de vista se narra la acción. Se trata de un personaje que desde niño ha sentido que no encaja con el mundo formal ypragmático que han creado los adultos. Sus puntos de vista son distintos donde el veía un elefante dentro de una serpiente, los demás veían un sombrero"

//2.1 AGREGANDO UN ESTILO
//TEXT-DANGER (BOOSTRAP)
parrafo.classList.add("text-danger", "fs-1", "text-center")

//Quiero centrar la foto
etiquetaImagen.classList.add("d_block","mx-auto")

//2.2 quitar un estilo
parrafo.classList.remove ("text-danger")