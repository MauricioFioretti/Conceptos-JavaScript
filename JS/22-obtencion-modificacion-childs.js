const contenedor = document.querySelector(".contenedor")

//obtener el primer elemento hijo del contenedor
const primerHijo = contenedor.firstElementChild
console.log(primerHijo)


//obtener el ultimo elemento hijo del contenedor
const ultimoHijo = contenedor.lastElementChild
console.log(ultimoHijo)


//obtener todos los nodos hijos del contenedor
const todosHijos = contenedor.childNodes //Nos devuelve un NodeList, no es un array
console.log(todosHijos) //HTMLCollection(3) [h2, h4, p]

//Para recorrer la collection html
for (let hijo of todosHijos){
    console.log(hijo)
}