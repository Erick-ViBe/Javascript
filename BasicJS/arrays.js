var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);

console.log(frutas.length);
//Tamanio

console.log(frutas[1]);
//Acceder a alguna posicion

console.log(frutas.push("Uvas"));
//Inserta al final

console.log(frutas.unshift("Uvas"));
//Inserta al inicio

console.log(frutas.pop());
//Devuelve y elimina el ultimo elemento en el array

console.log(frutas.shift());
//Devuelve y elimina el primer elemento en el array

console.log(frutas.indexOf("Cereza"));
//Devuelve la posicion del elemento

var result = frutas.filter(fruta => fruta.length > 6);
//.filter - Nos permite filtrar solo los elementos que deseamos(segun ciertos criterios), y nos devuelve un nuevo array. result = ["Manzana", "Platano"]

var tamanio = frutas.map(function(x) {
    return x.length;
});
//.map -o Crea un nuevo array con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos - tamanio = [7, 7, 6, 5]

//Otro ejemplo de .map
var numbers = [1, 4, 9];

var roots = numbers.map(function(num) {
    return Math.sqrt(num);
});
//Ahora roots es igual a [1, 2, 3]


























