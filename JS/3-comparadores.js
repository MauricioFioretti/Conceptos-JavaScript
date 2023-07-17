a = 5

b = "5"

//Preguntar si 2 cosas son iguales, sin importar el tipo de dato, en este caso 5 = "5", true

if (a == b){
    console.log("")
}

//Preguntar si 2 cosas son desiguales

if (a != b){
    console.log("")
}

//Preguntar si 2 cosas son exactamente iguales, tipo de dato y valor, en este caso 5 = "5", false

if (a === b){
    console.log("")
}

//Preguntar si 2 cosas no exactamente iguales, tipo de dato y valor, en este caso 5 = "5", true

if (a !== b){
    console.log("")
}

//Preguntar si una cosa es (mayor y menor o mayor) o (igual y (no menor o igual)) a la otra

if ( (a > b && a < b) || ( a >= b && !(a <= b) ) ){
    console.log("")
}