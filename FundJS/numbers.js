var = 27

edad = edad + 1
=
edad += 1
//Se puede hacer con +, -, *, /

var multiplicacion = 200.3*3
//Esto es igual a 600.90000000000001

var multiplicacion = Math.round(multiplicacion * 100 * 3) / 100
//Esto es igual a 600.9

var multiplicacion = parseFloat(multiplicacion.toFixed(2))
//Se utiliza toFixed, para indicar cuantos decimales queremos, pero como esto lo pasa a string, utilizamos parseFloat, para hecerlo numero(float) de nuevo
