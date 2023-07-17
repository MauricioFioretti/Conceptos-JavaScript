let contenedor = document.querySelector(".contenedor")

//Aca creamos el objeto (elemento lista). Esto es un [object HTMLLIElement]
const item = document.createElement("LI") 
// document.write(item + "<br>") //[object HTMLLIElement]
// console.log(item) //<li>...</li>

//Para crear el texto que vamos a guardar adentro del elemento creado tenemos que usar la funcion en vez de createElement, createTextNode. Esto es un [object Text]
const textoDelItem = document.createTextNode("Hola Mauri")
// document.write(textoDelItem + "<br>") //[object Text]
// console.log(textoDelItem) //"Hola Mauri"

//Finalente para meter el texto creado adentro del elemento creado, usamos append.child

//Agregamos el texto al elemento lista
item.appendChild(textoDelItem)

//Agregamos el elemento lista al documento
contenedor.appendChild(item)



//Para agregar varios elementos a un documento bien hecho, como se hace ahora

contenedor = document.querySelector(".contenedor")
const fragmento = document.createDocumentFragment()

for(let i = 0; i < 200000; i++){
    const item = document.createElement("LI") 
    item.innerHTML = "Hola Mauri"
    fragmento.appendChild(item)
}

contenedor.appendChild(fragmento)


//Otra forma
for(let i = 0; i < 20; i++){
    //Creamos la lista
    const item = document.createElement("LI") 
    //Creamos el texto 
    const textoDelItem = document.createTextNode("Hola Mauri")
    //Agregamos el texto a la lista
    item.appendChild(textoDelItem)
    //Agregamos la lista al fragmento
    fragmento.appendChild(item)
}

//Agregamos el fragmento al documento
contenedor.appendChild(fragmento)