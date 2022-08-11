let contenedorProductos=document.getElementById("fila")

//escucho click en la fila

let informacionProducto={}

contenedorProductos.addEventListener("click",function(evento){
    if(evento.target.classList.contains("img-fluid")){
        informacionProducto.nombre=(evento.target.parentElement.querySelector("h3").textContent)
        informacionProducto.precio=(evento.target.parentElement.querySelector("h2").textContent)
        informacionProducto.descripcion=(evento.target.parentElement.querySelector("p").textContent)
        informacionProducto.foto=(evento.target.parentElement.querySelector("img").src)

        //guardando un objeto en memoria
        localStorage.setItem("producto",JSON.stringify(informacionProducto))

        window.location.href="./ampliarinfo.html"
    }
})