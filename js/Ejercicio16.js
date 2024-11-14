// Usando while, solicitar al usuario un número y utilizando console.log para mostrar la
// tabla del número hasta 12.

alert('----------Ejercicio 16----------');
const numero = parseInt(prompt('Ingresar un Número:'))
let contador = 1;
let resultado;
while (contador <= 12) {
    resultado = numero * contador;
    console.log(`#${contador} -> ${resultado}`);
    contador++;
}