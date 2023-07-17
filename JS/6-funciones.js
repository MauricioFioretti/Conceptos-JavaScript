//FUNCIONES

let num1 = parseInt(prompt(`Ingrese el primer numero de la suma`))

let num2 = parseInt(prompt(`Ingrese el segundo numero de la suma`))

function suma(x, y){
    let resultado = x + y

    document.write(`<br> El resultado de la suma es: ${resultado} `)
    return resultado
}

let resultado = suma(num1, num2)

//podria ir todo adentro de la funcion, pero para usar el return lo puse asi
if (resultado > 18){
    alert("Puede venderle alcohol a esta persona. ")
} else if(resultado == 18){
    alert("Este pibe esta al borde de poder beber alcool. OJO. ")
} else{
    alert("Este pibe ES MENOR DE EDAD. No le vendas. ")
}




//Funcion flecha
const suma = (x, y) => {
    let resultado = x + y

    document.write(`<br> El resultado de la suma es: ${resultado} `)
}

suma(25,50)

let nombre = "Mauri"

const saludo = () => document.write(`Hola Mauri, como estas?`)

//Si es una sola linea de codigo, no hacen falta {} y si es un solo parametro, no hace falta parentesis en nombre
const saludar = nombre => document.write(`Hola ${nombre}, como estas?`)

saludar(nombre)



//Las 3 formas de crear una funcion

let sumar

function sumar(x, y){
    let resultado = x + y
    document.write(`<br> El resultado de la suma es: ${resultado} `)
}

sumar = function(x, y){
    let resultado = x + y
    document.write(`<br> El resultado de la suma es: ${resultado} `)
}

sumar = (x, y) => { 
    let resultado = x + y
    document.write(`<br> El resultado de la suma es: ${resultado} `)
}

sumar(50, 20)