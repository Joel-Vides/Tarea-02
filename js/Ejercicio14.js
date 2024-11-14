// Usando while mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo
// ingresa el usuario en un prompt.

alert('----------Ejercicio 14----------');
const numero = parseInt(prompt('Ingresar la Cantidad de Números que Desea:'))
let contador = 0;
while (contador < numero) {
    contador = contador + 2;
    console.log(contador);   
}