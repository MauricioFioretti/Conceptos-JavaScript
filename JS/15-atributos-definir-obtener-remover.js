let elemento

//Todos estos metodos se aplican al elemento. Por eso es elemento.algo

//setAttribute("type", "range")
elemento = document.querySelector(".elemento3")
elemento.setAttribute("type", "color") //Me cambia el type de text a color
elemento.setAttribute("loquesea", "color") //Tambien me deja cambiar el atributo de type a loquesea
document.write(elemento)  //[object HTMLInputElement]


//Acceder al valor del atributo type de un elemento
elemento = document.querySelector(".elemento4")
document.write(elemento.getAttribute("type")) //accedo al type del .elemento4, en este caso range


//Para remover un atributo, se utiliza removeAttribute()
elemento = document.querySelector(".elemento4")
elemento.removeAttribute("type") //elimino el atributo type