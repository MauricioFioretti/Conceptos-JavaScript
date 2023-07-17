//Seleccionamos en una variable el div que esta adentro de los otros 2 divs
const divFinal = document.querySelector(".div-final")

//Nos devuelve el div PADRE que encierra al (div-final, h2 y div h1), o sea, el primero de forma ascendente pero que es padre, no hermano. Si no hay ninguno, devuelve null
console.log(divFinal.closest(".div"))

