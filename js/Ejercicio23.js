// Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.

alert('----------Ejercicio 23----------');
const arrayVacio = new Array(20);

for (let i = 0; i < arrayVacio.length; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    arrayVacio[i] = numeroAleatorio;   
}

console.log('Los Número Generados son:');

console.log(arrayVacio);