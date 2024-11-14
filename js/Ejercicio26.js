// El usuario ingresa un string con varias palabras separadas por coma en un popup y se
// deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]).

alert('----------Ejercicio 26----------');
const palabras = prompt('Ingresar las Palabras:');
let array = palabras.split(',');

console.log(array);