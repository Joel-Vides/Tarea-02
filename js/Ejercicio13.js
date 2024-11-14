// Usando while mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo
// ingresa el usuario en un prompt.

alert('----------Ejercicio 13----------');
const numero = parseInt(prompt('Ingresar la Cantidad de Números que Desea:'))
let contador = 0;
while (contador < numero) {
    contador++;
    console.log(contador);   
}