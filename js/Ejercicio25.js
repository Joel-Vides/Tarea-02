// Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si
// un color introducido por el usuario a través de un prompt se encuentra dentro del array o
// no.

alert('----------Ejercicio 25----------');
const array = ['azul', 'amarillo', 'rojo', 'verde', 'café', 'rosa']

const color = prompt('Ingresar un Color:');

for (let i = 0; i < array.length; i++) {
    if (color.toLowerCase() === array[i]) {
        console.log(`El Color ${color} Está Dentro del Array.`);
    }
    if (color.toLocaleLowerCase() !== array[i]) {
        console.log('No esta');
        
    }
}