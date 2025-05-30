let numeroAleatorio = document.querySelector("#numeroAleatorio");
let numero = 0;

/* 
NÚMEROS ALEATORIOS
Objetos permite realizar tareas matemáticas en los numeros
Math.random = devuelve un número aletaroio entre 0 (inclusive) y 1 
Math.floor = reondea al número menor del decimal
Math.ceil = redondea al número mayor del decimal
Math.round = devuelve el valor de x redondeado a su número entero
*/

numero = Math.random()
numeroAleatorio.innerHTML = numero;
