import { encriptar, desencriptar } from "./encriptacion.js";

// Funcion para copiar
// function copiar(){

// }

const botonEncriptar = document.getElementById("accionEncriptar");
const botonDesencriptar = document.getElementById("accionDesencriptar")
const botonCopiar = document.getElementById("copiar")
// Añadir evento al presionar boton de encriptar
const textoEncriptado = document.getElementById("encriptar")

botonEncriptar.addEventListener("click", ()=>{
    // Obtenemos el valor del texto a encriptar y llamamos la funcion para encriptar
    // const divMensaje = document.getElementById("mensaje")
    const botonCopiar = document.getElementById("copiar")
    
    botonCopiar.style.display = 'block';
    // guardamos el texto que hay en el textarea
    let valorTextoEncriptado = textoEncriptado.value
    // guardamos la informacion encriptada del textarea
    let nuevoTexto = encriptar(valorTextoEncriptado)
    //Obtenemos el id del mensaje interno y el mensaje
    const mensaje = document.getElementById("mensaje-interno")
    const mensajeEvento = document.getElementById("mensaje")
    mensajeEvento.style.display = 'flex';
    mensajeEvento.style.flexDirection = 'column-reverse';
    // Creamos el nodo de texto con el texto encriptado
    var escribirTexto = document.createTextNode(nuevoTexto)
    
    
    if(mensaje){
        // Removemos la imagen
        mensaje.remove()
        // Creamos un elemento p para luego colocar el nodo de texto con su encriptacion
        let nuevoParrafo = document.createElement("p");
        nuevoParrafo.style.cssText = `
            word-wrap: break-word;
            overflow-wrap: break-word;
        `;
        nuevoParrafo.id = "parrafoNuevo" // Añadimos un ID para luego obtener su valor más fácil
        // Agregamos un hijo con appendchild en este ccaso añadimos el nodo de texto
        nuevoParrafo.appendChild(escribirTexto)
        // Verificar si esta el mensaje en la barra lateral derecha
        // Creamos un elemento div para colocar el parrafo
        let nuevoContenedor = document.createElement("div")
        nuevoContenedor.style.cssText = `
        width: auto;
        height: 85%;
        margin: 32px;
        display: block;
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
botonCopiar.addEventListener("click", () =>{
    let textoCopiar = document.getElementById("parrafoNuevo").innerText
    navigator.clipboard.writeText(textoCopiar)
        .then(() =>{
            console.log(textoCopiar)
        })
        .catch(err =>{
            console.error('Error al copiar el portapaeles: ', err)
        })
})