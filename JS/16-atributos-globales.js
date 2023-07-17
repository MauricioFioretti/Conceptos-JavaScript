//Todos los elementos html, tienen estos atributos
let elemento
elemento = document.querySelector(".titulo")

//Todos estos metodos se aplican al elemento. Por eso es elemento.algo

//class es un atributo global
elemento.setAttribute("class", "hola") //agrego o edito la class


//id tambien lo es
elemento.setAttribute("id", "hola") //agrego o edito el id


//contenteditable acepta true o false
elemento.setAttribute("contentEditable", "true") //agrego o edito el contenteditable, que me deja editar el texto en el html

//dir acepta 3 parametros left to rigth (ltr), rigth to left (rtl) pero esto es recomendable hacerlo desde css
elemento.setAttribute("dir", "rtl") //agrego o edito el dir, direccion del texto


//hidden. Si esta, desaparece el texto, para hacer aparecerlo, hay que remover el atributo hidden
elemento.setAttribute("hidden", "") //hace desaparecer el texto


//tabIndex. se pone como parametro algun numero. Y lo que me deja hacer es con la texla tab, como seleccionarlo
elemento.setAttribute("tabIndex", "0") //el numero le da la prioridad de tab. Podemos tener 0,1,2,3,4,etc


//title. Cuando ponemos el mouse encima nos tira la data
elemento.setAttribute("title", "titulo normal") 
