// Crear un programa que determine si un número introducido en un Prompt es par o
// no, la respuesta será mostrada en la consola.

alert('----------Ejercicio 7----------');
const numero = parseFloat(prompt('Ingresa un Número:'))
if (numero % 2 === 0) {
    console.log(`El Número ${numero} es Par!`);
}else{
    console.log(`El Número ${numero} no es Par!`);
}