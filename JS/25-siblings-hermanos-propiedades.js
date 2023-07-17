const contenedor = document.querySelector(".contenedor")

//Seleccionamos en una variable el elemento a modificar, en este caso el elemento con clase .h2
const h2Viejo = document.querySelector(".h2")

//nextElementSibling nos muestra el elemento siguiente de h2, en este caso p
const hermanoSiguiente = h2Viejo.nextElementSibling
console.log(hermanoSiguiente)

//nextElementSibling nos muestra el elemento siguiente de h2, en este caso h4
const hermanoAnterior = h2Viejo.previousElementSibling
console.log(hermanoAnterior)
