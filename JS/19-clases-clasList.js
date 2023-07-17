let elemento
let valor

elemento = document.querySelector(".titulo")
// classList Metodos


// add() agrega una clase al elemento
elemento.classList.add("clase") 


// remove() elimina una clase del elemento
elemento.classList.remove("grande") 


//Nos devuelve el valor de la class con indice i
valor = elemento.classList.item(1)
document.write(valor)


//Nos devuelve true si tiene la clase y sino false
valor = elemento.classList.contains("grande")  
document.write(valor) //true

//Agrega la clase si no la tiene y la saca si la tiene. Pero si le pasamos el segundo parametro, hace solo una cosa, por ejemplo, si le pasamos true, si la tiene no hace nada y si no la tiene la agrega
valor = elemento.classList.toggle("grande", true)  
document.write(valor) //true


//Remplaza la clase por otra. Si no existe, devuelve false y no agrega nada.
valor = elemento.classList.replace("grandee", "chico")  
document.write(valor) //false
