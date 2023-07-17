let array1 = ["Hola ", 12, 15, 45, 20, 5]


//Muestra un error solo si se cumple la condicion primera
console.assert( 5 > 6, "Hola Mundo")


//Limpia la consola
console.clear()


//Muestra un error
console.error("Muestra un error")


//console.table() muestra una tablay toma como argumento un array u objeto. Muestra en la columna uno los indices de los elementos y en la 2da columan los elementos
console.table(array1)


//Muestra un mensaje de advertencia
console.warn("Warning!")


//dir() despliega una lista interactiva de las propiedades del objeto especificado de javascript
console.dir(array1)


//==========================CONTADORES==============================

//Es un contador que registra la cantidad de veces que se llama a la funcion conunt y se puede resetear
console.count()
console.countReset()

//==========================GRUPOS==============================

//Podemos crear grupos en la consola para mostrar cosas
console.group()
//Los grupos pueden tener un nombre, y a medida que creemos grupos, se van a ir formando sub grupos hasta que no los cerremos
console.group("Alertas")
console.warn("Peligro")
console.error("Cuidado")
//Cerramos un grupo
console.groupEnd()
//Seguimos escribiendo en el primer grupo
console.log("Hola mundo")
//Cerramos el primer grupo creado
console.groupEnd()
//Podemos crear un grupo que no aparezca abierto de una
console.groupCollapsed()
//Escribimos cosas adentro del grupo que aparece cerrado por consola
console.log("Hola mundo")
//Cerramos el grupo
console.groupEnd()


//==========================TIEMPO==============================

//Arrancar el contador de tiempo
console.time()

//Mostrar el tiempo transcurrido
console.timeLog()
console.timeLog()
console.timeLog()
console.timeLog()

//Finalizar el temporizador
console.timeEnd