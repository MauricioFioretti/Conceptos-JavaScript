let array1 = ["Hola ", 12, 15, 45, 20, 5]

//-------------------------while y for-----------------------------------------------

//Se pone asi una palabra y dos puntos, para crear un break que salga de todos los bucles, y se pone en donde querramos que salga, por ej si tenemos 5 bucles uno adentro del otro, podemos decir que si esta en el 5to, salga hasta el 2do.
breakGigante:
while (true) {
    for (let i = 0; i < 10; i++) {
        console.log(i)
        if (i == 5) {
            break breakGigante  //Se puede poner continue si queremos que saltee la iteracion
        }
    }
}


//-------------------------for in-------------------------------------------------
//Sirve para recorrer un array y el valor de i es la posicion del elemento. Es lo mismo que hacer (let i = 0; i < array1.length; i++ )
for (let i in array1) {
    document.write("<br>" + i)
}

//Otro ejemplo
class objetos { constructor(nom, ape, alt){
        this.nombre = nom
        this.apellido = ape
        this.altura = alt }}
let algo = new objetos("Mauri", "Fioretti", 1.69)

for(let i in algo){
    document.write("<br>" + algo[i])
}


//-------------------------for of-------------------------------------------------
//Sirve para recorrer un array y el valor de i son los distintos elementos del array.
for (let i of array1) {
    document.write("<br>" + i)
}


//-------------------------do while-------------------------------------------------
let numeroAsignado = 0

do {
    numeroAsignado = parseInt(prompt(`Ingrese un número`))
} while (isNaN(numeroAsignado))

if (numeroAsignado == 0) {
    console.log("El número ingresado es 0")
}
else if (numeroAsignado < 0) {
    console.log("el número asignado es Negativo")
}
else {
    console.log("el número asignado es Positivo")
}




//-------------------------do while-------------------------------------------------

let num1 = 0
let num2 = 0
let num3 = 0

do {
    num1 = parseInt(prompt(`Ingrese el primer número`))
} while (isNaN(num1))

do {
    num2 = parseInt(prompt(`Ingrese el segundo número`))
} while (isNaN(num2))

do {
    num3 = parseInt(prompt(`Ingrese el tercer número`))
} while (isNaN(num3))


if (num1 > num2 && num1 > num3) {
    console.log(`El número mas grande es ${num1}`)
} else if (num2 > num3) {
    console.log(`El número mas grande es ${num2}`)
} else {
    console.log(`El numero mas grande es ${num3}`)
}



