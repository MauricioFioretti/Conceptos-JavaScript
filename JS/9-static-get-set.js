//Static

class celular {
    constructor(color, ram) {
        this.color = color
        this.memoriaRam = ram
    }

    //El static sirve para acceder al metodo por mas que no este definido el constructor, (las propiedades del objeto)
    static saludar(nombre) {
        document.write(`Hola ${nombre}`)
    }
}

celular.saludar("Mauri")


//Setter

class celular {
    constructor(color, ram) {
        this.color = color;
        this.memoriaRam = ram;
    }

    /*** @param {string} valor */

    set setRam(valor) {
        this.memoriaRam = valor;
    }
}

let celular1 = new celular("Negro", "8GB")

//Los setter y los getter funcionan como propiedades, por lo que no es como en una funcion que pones entre parentesis el parametro, sino que tenes que igualar y poner cual es el valor que queres que se asigne
celular1.setRam = "10GB"

document.write(celular1.memoriaRam)

