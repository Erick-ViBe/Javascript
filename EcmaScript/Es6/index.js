//Antes
function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

//ES6
function newFunction2(name='oscar', age = 32, country='MX'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('ricardo', 23, 'CO');


//+++++++++++++++++++++++++++++
let hello = 'Hello';
let world = 'World';
//Antes
let epicPhrase = hello + ' ' + world + '!!!';
console.log(epicPhrase);
//ES6
let epicPhrase2 = `${hello} ${world}!!!`;
console.log(epicPhrase2);


//+++++++++++++++++++++++++++++
//Antes
let lorem = 'Qui conasfl as aksnofas asalsjfois \n'
+ 'acoiisf asoinasf aosinasf';

console.log(lorem);

//ES6
let lorem2 = `Asvjoi safasoihasf asiohsaf asiuhfa
nslaskk alsdnnc jnasjnf aslkncas`;

console.log(lorem2);


//+++++++++++++++++++++++++++++
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}

//Antes
console.log(person.name, person.age);

//ES6
let{ name, age } = person;
console.log(name, age)


//+++++++++++++++++++++++++++++
let team1 = ['oscar', 'julian', 'ricardo'];
let team2 = ['valeria', 'yesica', 'camila'];

//ES6
let education = ['david', ...team1,  ...team2];
console.log(education);


//+++++++++++++++++++++++++++++
{
    var globalVar = 'Global Var';
}

{
    let globalLet = 'Global Let'
}

//Lo imprime
console.log(globalVar);

//globalLet is not defined
console.log(globalLet);

{
    let globalLet2 = 'Global Let 2'
    //Lo imprime
    console.log(globalLet2)
}


//+++++++++++++++++++++++++++++
//a siempre tendra el mismo valor
const a = 'b';

//Da error
a = 'a';


//+++++++++++++++++++++++++++++
let name = 'oscar';
let age = 32;

//Antes
objeto = { name: name, age: age };
console.log(objeto);

//ES6
objeto2 = { name, age };
console.log(objeto2);


//+++++++++++++++++++++++++++++
const names = [
    { name: 'oscar', age: 32 },
    { name: 'yesica', age: 27 }
];

//Antes
let listOfNames = names.map(function(item){
    console.log(item.name);
});

//ES6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age) => {
    //.....Codigo.....
};

const listOfNames4 = name => {
    //.....Codigo.....
};

//Otro ejemplo
const square = num => num * num;


//+++++++++++++++++++++++++++++
//+++++Promises+++++

const helloPromise = () => {
    return new Promise((resolve, reject) => {
	if(true){
	    resolve('Hey!!!');
	}else{
	    reject('Ups!!!');
	}
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));


//+++++++++++++++++++++++++++++
//class POO

class calculator{
    constructor(){
	this.valueA = 0;
	this.valueB = 0;
    }

    sum(valueA, valueB){
	this.valueA = valueA;
	this.valueB = valueB;
	return this.valueA+this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));


//+++++++++++++++++++++++++++++
//export - import

import { hello } from './module';

hello();


//+++++++++++++++++++++++++++++
//+++++Generators+++++

function* helloWorld(){
    if(true){
	yield 'Hello, ';
    }
    if(true){
	yield 'World!!!';
    }
};

const genetatorHello = helloWorld();
console.log(genetatorHello.next().value);
console.log(genetatorHello.next().value);
console.log(genetatorHello.next().value);

