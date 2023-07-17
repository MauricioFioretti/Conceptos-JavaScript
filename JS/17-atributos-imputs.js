let elemento
elemento = document.querySelector(".input-normal")

//Todos estos metodos se aplican al elemento. Por eso es elemento.algo

//Podemos modificar directamente el objeto, no nos hace falta ni setAttribute, ni getAttribute ni removeAttribute


//nos devuelve la clase del input. Accede directamente a la clase
document.write(elemento.className) // input-normal


//nos devuelve el valor que teanga value
document.write(elemento.value) // 123


//Modifica el type
document.write(elemento.type = "color") // Aparece el input con type color


// Especificamos que va a aceptar, en este caso como el type del input es file, el formato de los archivos que va a aceptar
elemento.accept = "image/png" //En este caso solo se aceptan imagenes PNG


// Especificamos la cantidad minima de caracteres que va a recibir el input
elemento.minLength = 4 


// Especificamos la cantidad maxima de caracteres que va a recibir el input
elemento.maxLength = 4 


// modifica la propiedad placeholder, y muestra algo predeterminado en el input, hasta que escribis algo
elemento.placeholder = "Hola mundo"


// No deja enviar el formulario hasta que no este puesto este campo
elemento.required = " " //Se pone al menos un espacio para que el campo sea requerido


