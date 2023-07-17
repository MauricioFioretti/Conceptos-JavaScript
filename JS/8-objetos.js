//Los objetos 

const perro = {
    ladrar : function(){ console.log('El perro esta ladrando') },
    comer : function comer(){ console.log('El perro esta comiendo') }
}

const perro1 = Object.create(perro)
perro1.ladrar()
perro1.comer()


//Clases deben tener un constructor y opcionales los metodos

class celular {

    //Constructor, son los parametros que se le va a pasar y a donde se definen variables a usar y se les pone "this." antes, siempre
    constructor(color, peso, tamPantalla, resCamara, ram) {
        this.color = color;
        this.peso = peso;
        this.tamanoPantalla = tamPantalla;
        this.resolucionCamara = resCamara;
        this.memoriaRam = ram;
        this.boton = false;
    }

    //Metodos, son funciones, se llaman metodos dentro de un objeto. No admite funciones flecha.
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

    //En los metodos se pueden generar documentacion que se muestre por pantalla o por consola
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

//Aca se crea una clase nueva que contiene lo de la clase anterior (se pone con super los parametros que se van a tener que pasar a la nueva clase tambien), pero que agrega cosas, ya sean caracteristicas del constructor o metodos.

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


//Asi se llama a una clase

//Primero se define y se pasan los parametros del constructor

//La clase en este caso es celular, y el objeto es celular1. EL OBJETO NO PUEDE TENER EL MISMO NOMBRE QUE LA CLASE. 
let celular1 = new celular(`Negro`, `189g`, `Full HD`, `50mpx`, `6GB`, `100mpx`);

//La clase en este caso es celularAltaGama, y el objeto es celular2. EL OBJETO NO PUEDE TENER EL MISMO NOMBRE QUE LA CLASE. 
let celular2 = new celularAltaGama(`Negro`, `189g`, `Full HD`, `50mpx`, `6GB`, `100mpx`);


//Luego se llama a partir del objeto creado, en este caso el celular1
celular2.btnEncendido();
celular2.reiniciar();
celular2.tomarFoto();
celular2.grabar();
celular2.grabarNormalLento();
celular2.grabarNormalLento();
celular2.grabarNormalLento();
celular2.grabarNormalLento();
celular2.reconocimientoFacial();
celular2.btnEncendido();
celular2.celularInfo();