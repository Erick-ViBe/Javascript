var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020,
    detallesDelAuto: function(){
	console.log("Auto " + this.modelo + " " + this.anio)
    }
}

console.log(miAuto.marca);

miAuto.detallesDelAuto();


//Constructora

function auto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);

var autoNuevo2 = new auto("Tesla", "Model X", 2018);

var autoNuevo3 = new auto("Toyota", "Corolla", 2020);

autoNuevo

autoNuevo2

autoNuevo3
