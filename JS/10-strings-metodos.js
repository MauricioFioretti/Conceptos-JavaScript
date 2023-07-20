//concat() une dos cadenas
let cadena1 = "Hola "
let cadena2 = "Mauri, todo bien todo bien todo bien?"
let cadena3 = "Mauri"
let cadena4 = "hola todo bien"
let cadena5 = "HOLATODO"
let cadena6 = 1213464

//Sirve para unir dos cadenas
document.write(cadena1.concat(cadena2))


//length muestra la cantidad de caracteres de una cadena
document.write(cadena1.length)


//startsWith, devuelve true si la cadena empieza con lo que pongas en el parentesis. No hace falta que sea un solo caracter
document.write(cadena1.startsWith("H"))


//endWith, devuelve true si la cadena termina con lo que pongas en el parentesis. No hace falta que sea un solo caracter
document.write(cadena1.endsWith("a "))


//include, devuelve true si la cadena por la que preguntamos, se encuentra dentro de la cadena1
document.write(cadena1.includes("ola "))


//indexOf devuelve la posicion del primer carater donde se encuentra la cadena de la cual estamos preguntando. Osea, primero se fija si la cadena esta dentro de la cadena que preguntamos, y si esta, nos dice la posicion del primer caracter de esas cadena, si no esta incluida la cadena, entonces nos devuelve -1
document.write(cadena2.indexOf("o b"))


//lastIndexOf nos dice tambien el primer caracter pero de la ultima vez que vea esa cadena, si aparece varias veces la cadena que buscamos, nos dice la posicion del primer caracter pero de la ultima vez a donde lo encuentra.
document.write(cadena2.lastIndexOf('todo bien'))


//padStart() se le pasa 2 parametros, el primero es cuantos caracteres queres que tenga la cadena final, y si es que el string es menor a esa longitud, rellena al principio con el segundo parametro que nosotros le pasemos.
document.write(cadena3.padStart(10, "123"))


//padEnd() Lo mismo que el anterior pero rellena al final
document.write(cadena3.padEnd(10, "123"))


//repeat() repite una cadena tantas veces le indiquemos
document.write(cadena3.repeat(5))


//split() separa una cadena y va guardando en un array, segun nosotros le indiquemos con que caracter tiene que ir cortando la cadena
let array1 = cadena4.split(" ")
document.write(array1[0], array1[1], array1[2])

//substring() es para cortar una cadena en un pedazo concreto. Le pasamos como parametro donde empieza (incluye el comienzo) y donde termina, sin incluir la ultima posicion
document.write(cadena2.substring(0, 10))


//toLowerCase() convierte toda la cadena a minuscula
document.write(cadena5.toLowerCase())


//toUpperCase() convierte toda la cadena a mayuscula
document.write(cadena4.toUpperCase())


//toString() convierte la cadena en string
document.write(cadena6.toString())


//.trim() elimina los espacios al principio y al final de una cadena de texto
document.write(cadena7.trim())


//.trimStart() elimina los espacios al principio de una cadena de texto
document.write(cadena7.trimStart())


//.trim() elimina los espacios al final de una cadena de texto
document.write(cadena7.trimEnd())