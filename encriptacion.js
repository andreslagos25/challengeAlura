export function encriptar(frase){
    // arreglo que contiene el valor equivalente a cada vocal
    const vocalesEncript = ["ai","enter","imes","ober","ufat"]
    // Se hace un ciclo para colocar cada letra en un arreglo
    let fraseArray = []
    for (let i = 0; i < frase.length; i++) {
        fraseArray.push(frase[i]);
    }
    /** 
     * En el for se verifica cada letra para encontrar
     * una vocal y se remplazara con su equivalente en el
     * arreglo vocalesEncript
    */
    for (let i = 0; i < fraseArray.length; i++) {        
        if (fraseArray[i] == 'a') {
            fraseArray.splice(i,1, vocalesEncript[0])
        }
        if (fraseArray[i] == 'e') {
            fraseArray.splice(i,1, vocalesEncript[1])
        }
        if (fraseArray[i] == 'i') {
            fraseArray.splice(i,1, vocalesEncript[2])
        }
        if (fraseArray[i] == 'o') {
            fraseArray.splice(i,1, vocalesEncript[3])
        }
        if (fraseArray[i] == 'u') {
            fraseArray.splice(i,1, vocalesEncript[4])
        }
    
    
    }
    // Retornamos la frase encriptada con un join
    // Para unir todos los elementos en el array
    return fraseArray.join("")
}

export function desencriptar(nuevoTexto){
    //let vocalesEncript = ["ai","enter","imes","ober","ufat"]
    let fraseArray =[]
    for (let i = 0; i < nuevoTexto.length; i++) {
        fraseArray.push(nuevoTexto[i])
    }
    for (let i = 0; i < fraseArray.length; i++) {
        if(fraseArray[i] == "a"){
            fraseArray.splice(i+1,1, '')
        }
        if(fraseArray[i] == "e"){
            fraseArray.splice(i+1,4, '')
        }
        if(fraseArray[i] == "i"){
            fraseArray.splice(i+1,3, '')
        }
        if(fraseArray[i] == "o"){
            fraseArray.splice(i+1,3, '')
        }
        if(fraseArray[i] == "u"){
            fraseArray.splice(i+1,3, '')
        }
    }
    return fraseArray.join("")
}
