let elemento
let valor

elemento = document.querySelector(".titulo")


// textContent devuelve el contenido html pero sin estilo. Todo lo escrito pero sin estilo. 
valor = elemento.textContent 

document.write("<br>" + valor) //Este es un titulo
alert(valor) //Este es un titulo

//innerHTML devuelve el contenido del elemento, incluidas los estilos aplicados al elemento
valor = elemento.innerHTML

document.write("<br>" + valor) //Este es un (sin el estilo que tenga el elemento)
alert(valor) //Este es un <b style="visibility: hidden;">titulo</b> 

//outerHTML devuelve no solo el contenido del elemento, sino todo el elemento entero, las etiquetas del mismo, etc
valor = elemento.outerHTML

document.write("<br>" + valor) //Este es un (Pero con el mismo estilo en html que el elemento)
alert(valor) //<p style="font-size: 30px;" class="titulo grande">Este es un <b style="visibility: hidden;">titulo</b> </p>