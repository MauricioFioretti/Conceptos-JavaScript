//DO WHILE and CONDICIONALES if - else if - else

let numeroAsignado = 0

do{
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



