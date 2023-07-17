const contenedor = document.querySelector(".contenedor")

//Creamos el nuevo elemento, entre las comillas va el tipo de elemento que va a ser el nuevo H1, H2, P, LI, etc
const h2Nuevo = document.createElement("LI")

//Con innerHTML lo q hacemos es decile qué va a ir adentro de la etiqueta puesta anteriormente, sea H1, LI, etc
h2Nuevo.innerHTML = "Nuevo Titulo H2"

//Seleccionamos en una variable el elemento a modificar, en este caso el elemento con clase .h2
const h2Viejo = document.querySelector(".h2")

//Con la funcion replaceChild reemplazamos, pasandole como parametros primero lo nuevo y lo a reemplazar
contenedor.replaceChild(h2Nuevo, h2Viejo)


//Para remover un elemento, previamente lo tenemos que tener seleccionado, en este caso en h2Viejo
contenedor.removeChild(h2Viejo)


//Para saber si un elemento tiene hijos, se usa hasChildNode. Tener en cuenta que si seleccionamos un h2 pero que tiene texto adentro, la respuesta sera true. 
let respuesta = contenedor.hasChildNodes()
console.log(respuesta)
