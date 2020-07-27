var nombre = 'Erick', apellido = 'ViBe'

var nombreMayusculas = nombre.toUpperCase()
//Cambia todo caracter a mayusculas = ERICK

var apellidoMayusculas = apellido.toLowerCase()
//Cambia todo caracter a minusculas = vibe

var primerCaracter = nombre.charAt(0)
//Retorna el caracter de la posicion indicada

var tamanoNombre = nombre.length
//Retorna el tamanio del string

var nombreCompleto = nombre + ' ' + apellido
//Concatena strings

var nombreCompleto = `${nombre} ${apellido}`
//Interpolacion de texto = Erick ViBe
//Podemos utilizar codigo JS dentro de los {}
var nombreCompleto2 = `${nombre.toUpperCase()} ${apellido.toLowerCase()}`
//ERICK vibe

var subString = nombre.substr(1,2)
//Retorna un substring desde la posicion(primer valor), y cuantos caracteres queremos(segundo valor)


//*****Desafio*****
//Retornar el ultimo caracter del nombre
var nombre = 'Usuario'

nombre.charAt(nombre.length-1)
