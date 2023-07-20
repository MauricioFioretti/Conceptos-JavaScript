'use strict';

let array1 = ["Hola ", 12, 15, 45, 20, 5]
let resultado = ""

//Para saber la cantidad de elementos de un array se usa el length pero sin parentesis
document.write(array1.length)


//.pop() elimina el ultimo elemento de un array y lo devuelve. si no hay elementos devulve undefined
document.write(array1.pop())


//.shift elimina el primer elemento de un array y lo devuelve. si no hay elementos devulve undefined
document.write(array1.shift())


//push() agrega un elemento al final del array y nos devuelve la cantidad de elementos del array
document.write("<br>" + array1.push(123123))


//.reverse() invierte el orden de los elementos del array y nos devuelve el array invertido
document.write("<br>" + array1.reverse())


//.unshift() agrega todos los elementos que querramos al principio del array y nos devuelve la nueva longitud del array
document.write("<br>" + array1.unshift(123, 12, 15))


//.sort() ordena los elementos segun el primer caracter y el orden ascii
document.write("<br>" + array1.sort())


//para soluciuonar el problema de sort(), podemos usar la sigueinte funcion
document.write("<br>" + array1.sort((a, b) =>  a - b))
//Otra forma de escribir la function
document.write("<br>" + array1.sort(function(a,b){return a - b;}))


//.splice() tiene 3 parametros. El primero es de donde arranca, el segundo cuantos elementos eliminar, el tercero, los elementos a agregar
//Podemos no eliminar elementos y poner la posicion desde donde queremos agregar, poner 0 y poner los elementos a agregar
//Para agregar cosas al final ponemos .splice(-1, 0, "elemento", "elemento"), aunque lo unico malo es que desplaza el ultimo elemento que ya era del array al final.. Podriamos agregar el ultimo elemento como parte de la lista que agregamos, y luego quitar el ultimo elemento con pop()
document.write("<br>" + array1.splice(0, 0, "Hola"))


//=========================Metodos accesores, que no modifican el array sino que crean uno nuevo=================================


//.join() nos devuelve un nuevo array, pero en string. Pero las comas las podemos reemplazar por lo que querramos
resultado = array1.join(` - `)
document.write("<br>" + resultado)  //se espera 12 - 15 - 45 - 20 - 50 - 55 - 52 - 1 - 2


//.slice() es como un substring, nos devuelve un trozo de array. No incluye el ultimo elemento
resultado = array1.slice(0, 5)
document.write("<br>" + resultado)  //se espera 12,15,45,20,50


//include, devuelve true si el elemento por el que preguntamos se encuentra dentro del array
document.write(array1.includes(15))

array1.splice(comienzo, elemntosAEliminar, "Elementos", "a", "agregar")

//indexOf devuelve la posicion del primer elemento donde se encuentra el elemento del cual estamos preguntando. Osea, primero se fija si el elemento esta dentro del array que preguntamos, y si esta, nos dice la posicion del primer elemento de ese array, si no esta incluida el elemento, entonces nos devuelve -1
document.write(array1.indexOf(15))


//lastIndexOf nos dice tambien el primer elemento pero de la ultima vez que vea ese array, si aparece varias veces el elemento que buscamos, nos dice la posicion del primer elemento pero de la ultima vez a donde lo encuentra.
document.write(array1.lastIndexOf('todo bien'))


//toString() convierte el array en string, incluyendo las ","
document.write(array1.toString())


//=========================FILTER========================
//.filter() toma como parametro una funcion y en cada iteracion del array, el parametro de la funcion toma el valor de un elemento. Con este elemento podemos hacer lo que querramos. Esto es lo mismo que forEach(), pero filter() tiene un plus, que puede filtrar segun algun parametro

//forma 1 de escribir
resultado = array1.filter( 
    function (numero){
        document.write(`${numero}`) //1215452050555212
    }
)

//forma 2 de escribir
resultado = array1.filter(numero => document.write(`${numero}`)) //1215452050555212

//otra funcion del filter
resultado = array1.filter(numero => numero > 20) //45,50,55,52

document.write("<br>" + resultado)  