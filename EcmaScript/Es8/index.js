//+++++++++++++++++++++++++++
//Object entries

const data = {
    frontend: 'oscar',
    backend: 'isabel',
    design: 'ana',
}

const entries = Object.entries(data);
console.log(entries);

//entries = [
    //[ 'frontend', 'oscar' ],
    //[ 'backend', 'isabel' ],
    //[ 'design', 'ana' ]
//]

//Cuantos elementos contiene nuestro objeto
//console.log(Object.entries(data).length);
console.log(entries.length);



//+++++++++++++++++++++++++++
//Object values

const data = {
    frontend: 'oscar',
    backend: 'isabel',
    design: 'ana',
}

const values = Object.values(data);
console.log(values);

//values = ["oscar", "isabel", "ana"]


//+++++++++++++++++++++++++++
//Padding

const string = 'hello';
console.log(string.padStart(7,'hi'));
//imprime 'hihello'

console.log(string.padEnd(12,' -----'));
//imprime 'hello -----'













