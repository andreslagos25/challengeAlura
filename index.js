import { encriptar, desencriptar } from "./encriptacion.js";

const botonEncriptar = document.getElementById("accionEncriptar");
const botonDesencriptar = document.getElementById("accionDesencriptar")
// Añadir evento al presionar boton de encriptar
let textoEncriptado = document.getElementById("encriptar")
botonEncriptar.addEventListener("click", ()=>{
    // Obtenemos el valor del texto a encriptar y llamamos la funcion para encriptar
    
    // guardamos el texto que hay en el textarea
    let valorTextoEncriptado = textoEncriptado.value
    // guardamos la informacion encriptada del textarea
    let nuevoTexto = encriptar(valorTextoEncriptado)
    //Obtenemos el id del mensaje interno y el mensaje
    const mensaje = document.getElementById("mensaje-interno")
    const mensajeEvento = document.getElementById("mensaje")
    
    // Creamos el nodo de texto con el texto encriptado
    let escribirTexto = document.createTextNode(nuevoTexto)
    
    
    if(mensaje){
        // Removemos la imagen
        mensaje.remove()
        // Creamos un elemento p para luego colocar el nodo de texto con su encriptacion
        let nuevoParrafo = document.createElement("p")
        nuevoParrafo.id = "parrafoNuevo" // Añadimos un ID para luego obtener su valor más fácil
        // Agregamos un hijo con appendchild en este ccaso añadimos el nodo de texto
        nuevoParrafo.appendChild(escribirTexto)
        // Verificar si esta el mensaje en la barra lateral derecha
        // Creamos un elemento div para colocar el parrafo
        let nuevoContenedor = document.createElement("div")
        nuevoContenedor.style.cssText = `
        width: auto;
        height: auto;
        margin: 32px;
        word-wrap: break-word;
        display: inline-block;
        `
        mensajeEvento.appendChild(nuevoContenedor)
        nuevoContenedor.id = "nuevoContenedor"
        let prueba = document.getElementById("nuevoContenedor")

        prueba.appendChild(nuevoParrafo)
    } else{
        // Eliminamos el parrafo que creamos para que no
        // se sobreescriba lo que antes teniamos y luego lo
        // creamos otra vez
        document.getElementById("parrafoNuevo").remove()
        let nuevoParrafo = document.createElement("p")
        nuevoParrafo.id = "parrafoNuevo" // Añadimos un ID para luego obtener su valor más fácil
        // Agregamos un hijo con appendchild en este ccaso añadimos el nodo de texto
        nuevoParrafo.appendChild(escribirTexto)
        let prueba = document.getElementById("nuevoContenedor")

        prueba.appendChild(nuevoParrafo)
     }
})

botonDesencriptar.addEventListener("click", () =>{
    // Obtenemos el valor del texto a desencriptar y 
    //llamamos la funcion para deseencriptar
    
    // guardamos el texto que hay en el textarea
    let valorTextoEncriptado = textoEncriptado.value
    // guardamos la informacion encriptada del textarea
    let nuevoTexto = desencriptar(valorTextoEncriptado)
    //Obtenemos el id del mensaje interno y el mensaje
    const mensaje = document.getElementById("mensaje-interno")
    const mensajeEvento = document.getElementById("mensaje")
    
    // Creamos el nodo de texto con el texto desencriptado
    let escribirTexto = document.createTextNode(nuevoTexto)
    
    
    
    if(mensaje){
        // Removemos la imagen
        mensaje.remove()
        // Creamos un elemento p para luego colocar el nodo de texto con su desencriptacion
        let nuevoParrafo = document.createElement("p")
        nuevoParrafo.id = "parrafoNuevo" // Añadimos un ID para luego obtener su valor más fácil
        // Agregamos un hijo con appendchild en este ccaso añadimos el nodo de texto
        nuevoParrafo.appendChild(escribirTexto)
        // Verificar si esta el mensaje en la barra lateral derecha
        // Creamos un elemento div para colocar el parrafo
        let nuevoContenedor = document.createElement("div")
        nuevoContenedor.style.cssText = `
        width: auto;
        height: auto;
        margin: 32px;
        word-wrap: break-word;
        display: inline-block;
        `
        mensajeEvento.appendChild(nuevoContenedor)
        
        nuevoContenedor.id = "nuevoContenedor"
        let prueba = document.getElementById("nuevoContenedor")
        prueba.appendChild(nuevoParrafo)
    } else{
        document.getElementById("parrafoNuevo").remove()
        let nuevoParrafo = document.createElement("p")
        nuevoParrafo.id = "parrafoNuevo" // Añadimos un ID para luego obtener su valor más fácil
        // Agregamos un hijo con appendchild en este ccaso añadimos el nodo de texto
        nuevoParrafo.appendChild(escribirTexto)
        let prueba = document.getElementById("nuevoContenedor")

        prueba.appendChild(nuevoParrafo)
     }
})