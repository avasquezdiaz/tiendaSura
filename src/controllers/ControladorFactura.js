let carrito=JSON.parse(localStorage.getItem ("carrito"))
let totalcompra=document.getElementById("totalcompra")
let TotalCompraUsd=document.getElementById("TotalCompraUsd")
let total=0
let total2=0
let factura=document.getElementById("factura")

//compruebo el estado del carrito
if(carrito==null){
    //poner el total en cero
    totalcompra.textContent="Total:$0"

    let fila=document.createElement("div")
    fila.classList.add("row","my-5", "justify-content-center")

    let columna=document.createElement("div")
    columna.classList.add("col-12", "col-md-4")

    let imagen=document.createElement("img")
    imagen.classList.add("img-fluid","w-100")
    imagen.src="../../assets/img/CarritoVacio.png"

    let mensaje=document.createElement("h3")
    mensaje.classList.add("text-center")
    mensaje.textContent="compreeeee"

    columna.appendChild(imagen)
    columna.appendChild(mensaje)
    fila.appendChild(columna)
    factura.appendChild(fila)



}
else{
    //recorro carrito
    carrito.forEach(function(producto){
        
        let fila=document.createElement("div")
        fila.classList.add("row","my-5", "justify-content-center", "shadow", "p-3")

        let columna1=document.createElement("div")
        columna1.classList.add("col-12", "col-md-5")

        let columna2=document.createElement("div")
        columna2.classList.add("col-12", "col-md-3", "border-end","align-self-center")

        let columna3=document.createElement("div")
        columna3.classList.add("col-12", "col-md-3", "align-self-center")

        let foto=document.createElement("img")
        foto.classList.add("img-fluid","w-100")
        foto.src=producto.foto

        let nombre=document.createElement("h3")
        nombre.classList.add("text-center", "text-muted")
        nombre.textContent=producto.nombre

        let precio=document.createElement("h4")
        precio.classList.add("text-center", "mt-5")
        precio.textContent="Unit cost: " +producto.precio
        
        
        let cantidad=document.createElement("h4")
        cantidad.classList.add("text-center")
        cantidad.textContent="Quantity: " +producto.cantidad

        let descripcion=document.createElement ("h5")
        descripcion.classList.add("text-center")
        descripcion.textContent="Description: " +producto.descripcion

        let subtotal=document.createElement("h2")
        subtotal.classList.add("fw-bold", "text-center","bg-dark", "text-white")
       
        let subtotalcalculado=producto.precio*producto.cantidad
        console.log(subtotalcalculado)
        subtotal.textContent=subtotalcalculado

        let textosubtotal=document.createElement ("h3")
        textosubtotal.classList.add("fw-bold", "text-center")
        textosubtotal.textContent="Subtotal"




        total=total+subtotalcalculado
        total2=total2+subtotalcalculado

        let textototalcompra=document.createElement ("h2")
        textototalcompra.classList.add("fw-bold", "text-center")
        textototalcompra.textContent="Total Compra"

        

        let botonlimpiar=document.getElementById("botonlimpiar")
        botonlimpiar.addEventListener ("click", function(evento){
            alert("Estoy limpiando")

            //limpio el carrito de la memoria
            localStorage.removeItem("carrito")

            //recargar la pagina
            window.location.href="./resumenCompra.html"

            //poner el total en cero
            totalcompra.textContent="Total:$ +totalcompra"
                 

        })
     


        columna1.appendChild(foto)
        columna2.appendChild(nombre)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)
        columna2.appendChild(descripcion)
        columna3.appendChild(textosubtotal)
        columna3.appendChild(subtotal)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        fila.appendChild(columna3)
        factura.appendChild(fila)
        

    })

    
    totalcompra.textContent=total


        let dollar=document.getElementById("dollar")
        dollar.addEventListener("click",function(evento){
            TotalCompraUsd.textContent=Math.round(total2/4500)
        })



    


}