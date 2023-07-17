// Problema 1:

let helados = [2.9, 2.9, 1.8, 1.7, 1.6, 1, 0.6, 0];

let nombres = ["Roberto", "Pedro", "Cofla"];

let plataRoberto = parseFloat(prompt(`Roberto ingresa tu monto: `));

// let plataPedro = parseInt(prompt(`Pedro ingresa tu monto: `));

// let plataCofla = parseInt(prompt(`Cofla ingresa tu monto: `));

for (i in helados){
    if (parseFloat(plataRoberto) >= parseFloat(helados[i])){

        if (i == 0){
            document.write(`Comprate el Cuarto o el de Confites`);
            break;
        }
        else if (i == 2){
            document.write(`Comprate el bombon Helardo`);
            break;
        }
        else if (i == 3){
            document.write(`Comprate el bombon Heladovich`);
            break;
        }
        else if (i == 4){
            document.write(`Comprate el bombon Heladix`);
            break;
        }
        else if (i == 5){
            document.write(`Comprate el bombon Palito Crema`);
            break;
        }
        else if (i == 6){
            document.write(`Comprate el bombon Palito Agua`);
            break;
        }
        else{
            document.write(`Sos un pobre de mierda `);
            break;
        }
    }
}






// Problema 2:

let entrada = true;

while (true) {
    let edad = parseInt(prompt("Ingtrese su edad: "));

    if (edad < 18) {
        alert(`Usted no puede pasar a la joda porque es menor. `);
    }

    else {
        alert(`Usted si puede pasar a la joda. `);

        if (entrada) {
            let hora = parseFloat(prompt("Ingtrese la hora con formato `hh.mm`: "));
            if (hora > 2 && entrada && hora < 7) {
                alert(`Felicitaciones, es el primero en pasar luego de las 2AM y no debe pagar entrada. `)
                entrada = false;
            }
        }
    }

    let gente = toLowerCase(prompt("Queda gente todavia? "));

    if (gente == "no" || gente == "NO" || gente == "No" || gente == "nO") {
        break;
    }
}




// Problema cap3:

class celular {
    constructor(color, peso, tamPantalla, resCamara, ram) {
        this.color = color;
        this.peso = peso;
        this.tamanoPantalla = tamPantalla;
        this.resolucionCamara = resCamara;
        this.memoriaRam = ram;
        this.boton = false;
    }

    btnEncendido() {
        if (!this.boton) {
            alert(`Encendiendo celular. `);
            this.boton = true;
        }
        else {
            alert(`Apagando celular. `);
            this.boton = false;
        }
    }

    reiniciar() {
        alert(`Se esta reinciando el celular. `)
    }

    tomarFoto() {
        alert(`Usted ha tomado una foto con la resolucion de ${this.resolucionCamara}. `);
    }

    grabar() {
        alert(`Usted esta grabando con una resolucion de ${this.resolucionCamara}. `);
    }

    celularInfo() {
        document.write(
            `
            Peso: <b>${this.peso}</b> <br>
            Color: <b>${this.color}</b> <br>
            Pantalla: <b>${this.tamanoPantalla}</b> <br>
            Resolución de cámara: <b>${this.resolucionCamara}</b> <br>
            Memoria RAM: <b>${this.memoriaRam}</b> <br>
            `
        )
    }
}

class celularAltaGama extends celular {
    constructor(color, peso, tamPantalla, resCamara, ram, resoCamExtr){
        super(color, peso, tamPantalla, resCamara, ram);
        this.resolucionCamaraExtra = resoCamExtr;
        this.camara = true;
    }

    grabarNormalLento(){
        if (this.camara){
            alert(`El celular paso a modo camara lenta`);
            this.camara = false;
        }

        else{
            alert(`El celular paso a modo camara rapida`);
            this.camara = true;
        }
    }

    reconocimientoFacial(){
        alert(`Se activo el reconocimiento facial`);
    }
}


let celular1 = new celularAltaGama(`Negro`, `189g`, `Full HD`, `50mpx`, `6GB`, `100mpx`);

celular1.btnEncendido();
celular1.reiniciar();
celular1.tomarFoto();
celular1.grabar();
celular1.grabarNormalLento();
celular1.grabarNormalLento();
celular1.grabarNormalLento();
celular1.grabarNormalLento();
celular1.reconocimientoFacial();
celular1.btnEncendido();
celular1.celularInfo();






// problema: 8

profesores = ["Juan Carlos", `Maria Spina`, `Jose Araujo`, `Ruben Profe`];

estudiantes = [`Paula`, `Javier`, `Gian`, `Jeremias`, `Mateo`, `Nico`, `Azul`, `Agustin`, `Anabella`, `Belen`, `Giuli`, `Franco`, `Luigi`, `Lourdes`];

fisica = ["Física","Juan Carlos", `Paula`, `Javier`, `Gian`, `Jeremias`, `Mateo`, `Nico`];

matematica = ["Matemáticas",`Maria Spina`, `Nico`, `Azul`, `Agustin`, `Cofla`, `Anabella`, `Belen`, `Giuli`];

quimica = ["Química",`Jose Araujo`, `Agustin`, `Anabella`, `Belen`, `Giuli`, `Franco`, `Cofla`];

ciencias = ["Ceincias",`Ruben Profe`,  `Jeremias`, `Mateo`, `Nico`, `Azul`, `Agustin`, `Anabella`, `Belen`, `Giuli`, `Franco`, `Luigi`, `Lourdes`];

document.write(ciencias)

function materia(materia){
    document.write(`<br> De la materia ${materia[0]}, el profesor es ${materia[1]} y los estudiantes enlistados son: `);
    materia.shift();
    materia.shift();

    document.write(`${materia.join(" - ")}`)
}

materia(fisica)

//problema 9

let cantidadAlumnos = 0

do{
    cantidadAlumnos = parseInt(prompt(`Ingrese la cantidad de alumnos`))
} while (isNaN(cantidadAlumnos)) 

function condicion(promedio){

    //Si el promedio es mayor a 6, devolvemos promedio y aprobado
    if (promedio >= 6){
        return "APROBADO"
    }

    //Si el promedio es menor a 6, devolvemos promedio y desaprobado
    else{
        return "DESAPROBADO"
    }
} 

for (let i = 1; i <= cantidadAlumnos; i++){

    //Pedimos que ingrese el nombre del estudiante
    let nombre = prompt(`Ingrese el nombre del alumno ${i}`)

    //Pedimos que ingrese la nota 1 del estudiante
    let nota1 = 0
    do{
        nota1 = parseInt(prompt(`Ingrese la nota 1 del estudiante ${nombre}`))
    } while (isNaN(nota1) || nota1 <= 0 || nota1 >= 10) 

    //Pedimos que ingrese la nota 2 del estudiante
    let nota2 = 0
    do{
        nota2 = parseInt(prompt(`Ingrese la nota 1 del estudiante ${nombre}`))
    } while (isNaN(nota2) || nota2 <= 0 || nota2 >= 10) 

    //calculamos el promedio aca directamente y le pasamos como parametro a la funcion, solo el promedio
    let promedio = (nota1 + nota2) / 2

    //llamamos a la funcion y le pasamos los parametros de nota1 y nota2, pero como la funcion nos retorna 2 valores, guardamos esos 2 valores en 2 variables e igualamos a la funcion
    let condicion2 = condicion(promedio)

    document.write(`El estudiante ${nombre}, obtuvo un promedio de ${promedio} por lo que su condición actual es: ${condicion2}. <br>`)

}