const contenedor = document.querySelector(".contenedor")

//Seleccionamos en una variable el elemento a modificar, en este caso el elemento con clase .h2
const h2Viejo = document.querySelector(".h2")

//parentElement busca la primer etiqueta html que es padre. Pero por ahi no es una etiqueta html el padre, en ese caso se usa parentNode
const padre = h2Viejo.parentElement //<div class="contenedor">...</div>
console.log(padre)

const padreNode = h2Viejo.parentNode //<div class="contenedor">...</div>
console.log(padreNode)
