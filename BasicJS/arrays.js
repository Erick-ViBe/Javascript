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

var = encontrarFruta = frutas.find(function(fruta){
    return fruta === "Fresa";
});
//.find - Crea un nuevo array con el elemento que tu indicaste, en el caso de que lo haya, sino, no devuelve nada, cuando encuentra el elemento buscado, deja de buscar y  lo retorna 

frutas.forEach(function(fruta){
    console.log(fruta);
});
//Recorre todo ls elementos del array

frutasCortas = frutas.some(function(fruta){
    return fruta.length <= 5;
});
//Devuelve un true o un false de acuerdo a si existe un elemento en el array que cumpla con lo indicado, en este caso devolveria True ya que "fresa" tiene 5 letras
