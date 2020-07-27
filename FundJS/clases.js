class Persona{
    constructor(nombre, apellido, altura){
	this.nombre = nombre
	this.apellido = apellido
        this.altura = altura
    }

    saludar(fn){
	console.log(`Hola!!! Me llamo ${this.nombre} ${this.apellido}`)
	if(fn){
	    fn(this.nombre, this.apellido)
	}
    }

    soyAlto(){
	//console.log(this.altura >= 1.8)
	return this.altura >= 1.8
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
	super(nombre, apellido, altura)
    }

    saludar(fn){
	//var nombre = this.nombre
	//var apellido = this.apellido
	//A esto se le llama desestructurar el objeto
	var { nombre, apellido } = this

	console.log(`Hola!!! Me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
	if(fn){
	    fn(nombre, apellido, true)
	}
    }
}

function responderSaludo(nombre, apellido, esDesarrolador){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDesarrolador){
	console.log(`Wow, no sabia que eras desarrollador!!!`)
    }
}

var fer = new Persona('Fernanda', 'ViBe', 1.6)

fer.saludar()
console.log(fer.soyAlto())


var erick = new Desarrollador('Erick', 'ViBe', 1.8)

erick.saludar(responderSaludo)
console.log(erick.soyAlto())

var alexia = new Persona('Alexia', 'LePo', 1.7)

alexia.saludar(responderSaludo)
console.log(alexia.soyAlto())
