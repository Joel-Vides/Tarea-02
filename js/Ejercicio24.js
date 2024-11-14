// Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es
// introducido por el usuario a través de un prompt.

alert('----------Ejercicio 24----------');
const arrayVacio = new Array();

const numero = parseInt(prompt('Ingresar la Cantidad de Números Aleatorios que Desea Generar:'));
for (let i = 0; i < numero; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    arrayVacio[i] = numeroAleatorio; 

}
console.log(arrayVacio);