//if

var edad = 18;

if(edad === 18){
    console.log("Puedes votar, sera tu 1ra votacion");
}else if(edad > 18){
    console.log("Puedes votar de nuevo");
}else{
    console.log("Aun no puedes votar");
}



//if/else ternario

//condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Si es un uno" : "No es uno";

var resultado = numero === 2 ? "Si es un dos" : "No es dos";



//Switch

var numero = 10;

switch(numero){
    case 1:
	console.log("Soy un 1!!!");
	break;
    case 10:
	console.log("Soy un 10!!!");
	break;
    case 100:
	console.log("Soy un 100!!!");
	break;
    default:
	console.log("No soy nada!!!");
}


var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log("Hola, " + estudiante + "!!!");
}

function despedirEstudiantes(estudiante){
    console.log("Adios, " + estudiante + "!!!");
}

//For

for(var i=0; i<estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}


//While

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    despedirEstudiantes(estudiante)
}
















