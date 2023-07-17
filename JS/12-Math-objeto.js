let i = 0
let x = 0

//redondea segun la cantidad de decimales que querramos, el argumento es la cantidad de decimales
i = i.toFixed(2)


//Numero PI
i = Math.PI
document.write(i)


//Math.abs(x) devuelve el valor absoluto de x
x = -154

i = Math.abs(x)


//Devuelve la parte entera de un numero, elimina los decimales. A diferencia de ceil() en los numeros negativos no se va al mas cerca de 0, sino que elimina los decimales simplemente.
x = 154.5
x = -154.5
Math.trunc(x) //154 y -154


//Funcion techo
x = 154.5
x = -154.5
i = Math.ceil(x) //155 y -154


//Funcion piso
x = 154.5
x = -154.5
i = Math.floor(x) //154 y -155


//Potencia de, x es la base e y es el exponente
i = Math.pow(x, y)


//Devuleve un numero entre [0, 1)
i = Math.random()


// Devuleve el entero mas cercano.. de .5 para rriba redondea para arriba
i = Math.round(x)


//Devuelve el signo de x como 1, -1 o 0
i = Math.sign(x)


//Devuelve la raiz cuadrada de un numero x
Math.sqrt(x)


