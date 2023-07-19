let resultado
let resultado1
let resultado2
let soloNombres
let total

//=====================================1=================================================

//funcion operacion
//La funcion recibe como parametro la condicion para retornar algo, pero lo que retorne, es una funcion, que se va a guardar en la variable a la que igualemos la funcion
function calcular(operacion) {
    if (operacion === "sumar") {
        return (a, b) => a + b //va entre llaves cuando ponemos return
    }
    else if (operacion === "restar") {
        return (a, b) => a - b
    }
    else {
        console.log(`Usted no ingreso una operacion valida, ingrese "sumar" o "restar".`)
    }
}

const sumar = calcular("sumar")
const restar = calcular("restar")

//Finalmente ahora que tenemos la funcion sumar y restar guardadas en variables distintas, llamamos a esas variables
console.log(sumar(5, 8)) //13
console.log(restar(8, 5)) //3

console.clear()
//=====================================2=================================================
//Crear una funcion que determine si es mayor o no que cierto numero inicial

//Quiero comparar que a, b, c, d sean mayor que x
function mayorQue(x) {
    return esMayorQue => esMayorQue > x
}

//Defino el numero con el que voy a hacer todas las comparaciones
let mayorQue10 = mayorQue(10)

//Comparo numeros que yo quiera con respecto al anterior definido
console.log(mayorQue10(10)) //false
console.log(mayorQue10(12)) //true

console.clear()
//=====================================3=================================================
//forEach, recibe una funcion como parametro
let numeros = [12, 52, 33, 49, 65, 6, 15, 23]

numeros.forEach(num => { console.log(num) })

console.clear()
//=====================================4=================================================
//find(), retorna solo un elemento, el primero que cumpla con la condicion, recibe una funcion de comparacion. Si no lo encuetra, devulve undefined
numeros = [12, 52, 33, 49, 65, 6, 15, 23]

resultado = numeros.find(num => num > 60)
console.log(resultado) //65

//Otro ejemplo, en cada vuelta find toma como elemento un objeto en este caso
const cursos = [
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'ReactJS', precio: 22000 },
]

resultado1 = cursos.find(el => el.nombre === "ReactJS")
resultado2 = cursos.find(el => el.nombre === "DW")

console.log(resultado1) // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2) // undefined

console.clear()
//=====================================5=================================================
//filter(). a diferencia de find(), filter() devuleve un array con todos los elementos que cumplan la condicion. Si no encuentra elementos, devuelve []

const cursos2 = [
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'ReactJS', precio: 22000 },
    { nombre: 'AngularJS', precio: 22000 },
    { nombre: 'Desarrollo Web', precio: 16000 },
]

resultado1 = cursos2.filter((el) => el.nombre.includes('JS'))
resultado2 = cursos2.filter((el) => el.precio < 14000)

console.log(resultado1)
/* [
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'Angular', precio: 22000}
] */
console.log(resultado2) // []

console.clear()
//=====================================6=================================================
//some() es igual que find(), pero en vez de devolver el elemento, devuelve true o false
numeros = [12, 52, 33, 49, 65, 6, 15, 23]

resultado = numeros.some(num => num > 60)
console.log(resultado) //true

//Otro ejemplo
const cursos3 = [
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'ReactJS', precio: 22000 },
]

resultado1 = cursos3.some(el => el.nombre === "ReactJS")
resultado2 = cursos3.some(el => el.nombre === "DW")

console.log(resultado1) // true
console.log(resultado2) // false

console.clear()
//=====================================7=================================================
//maps() se utiliza para crear un nuevo array con todos los elementos del array original, transformados según las operaciones de la función enviada por parámetro.

const cursos4 = [
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'ReactJS', precio: 22000 },
    { nombre: 'AngularJS', precio: 22000 },
    { nombre: 'Desarrollo Web', precio: 16000 },
]

soloNombres = cursos4.map(el => el.nombre)
console.log(soloNombres) // [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]

//Otro ejemplo, actualizacion del precio aumentado 25%
const precioActualizado = cursos4.map(el => {
    return { nombre: el.nombre, precio: el.precio * 1.25 }
})
console.log(precioActualizado)
/* [
    { nombre: 'Javascript', precio: 18750 },
    { nombre: 'ReactJS', precio: 27500 },
    { nombre: 'AngularJS', precio: 27500 },
    { nombre: 'Desarrollo Web', precio: 20000 }
] */

console.clear()
//=====================================8=================================================
//reduce() se le pasa como parametro extra desde cuanto arranca el acumulador, en este caso de 0
//Nos permite obtener un único valor tras iterar sobre el array. Es decir, funciona como un método que resume el array a un único valor de retorno.
numeros = [1, 2, 3, 4, 5, 6]
total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total) // 21

//otro ejemplo
const miCompra = [
    { nombre: 'Desarrollo Web', precio: 20000 },
    { nombre: 'Javascript', precio: 18750 },
    { nombre: 'ReactJS', precio: 27500 }
]


total = miCompra.reduce((acumulador, el) => acumulador + el.precio, 0)
console.log(total) // 66250

console.clear()
//=====================================9=================================================
//sort() sirve para ordenar segun la funcion de ordenamiento que le pasemos

numeros = [40, 1, 5, 200]
numeros.sort((a, b) => a - b)  // [ 1, 5, 40, 200 ]
numeros.sort((a, b) => b - a)  // [ 200, 40, 5, 1 ]

//Otro ejemplo
const items = [
    { name: 'Pikachu', price: 21 },
    { name: 'Charmander', price: 37 },
    { name: 'Pidgey', price: 45 },
    { name: 'Squirtle', price: 60 }
]

items.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    // a es igual a b
    return 0;
})

//Metodo reducido de lo de arriba
items.sort( (a, b) => {return  a.name > b.name ? 1: a.name < b.name ? -1: 0 } )

console.log(items)

console.clear()
//=====================================n=================================================