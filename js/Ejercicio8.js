// Crear un programa que determine si un número introducido en un Prompt es divisible
// por 5 o no, mostrar el resultado con console.log.

alert('----------Ejercicio 8----------');
const numero = parseFloat(prompt('Ingresar un Número:'))
if (numero % 5 === 0) {
    console.log(`El Número ${numero} es Divisible por 5!`);
}else{
    console.log(`El Número ${numero} NO es Divisible por 5!`);
}