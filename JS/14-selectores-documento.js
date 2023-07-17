let elemento

//Todos estos metodos se aplican al documento html. Por eso es documento.algo

//getElementById()
elemento = document.getElementById("elemento1") //por id
document.write(elemento)  //[object HTMLParagraphElement]


//getElementsByTagName()
elemento = document.getElementsByTagName("p") //por nombre del elemento
document.write(elemento)  //[object HTMLCollection]
document.write(elemento[0]) //[object HTMLParagraphElement]


//querySelector()
elemento = document.querySelector(".elemento2")  //por clase
document.write(elemento)  //[object HTMLParagraphElement]


//querySelectorAll()
elemento = document.querySelectorAll(".elemento2")  //todos los elementos de lo que sea, id, class, etc
document.write(elemento)  //[object NodeList]
document.write(elemento[0]) //[object HTMLParagraphElement]