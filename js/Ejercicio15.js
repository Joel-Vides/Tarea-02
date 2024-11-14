// Usando while mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo
// ingresa el usuario en un prompt.

alert('----------Ejercicio 15----------');
const numero = parseInt(prompt
    ('Ingresar la Cantidad de Números que Desea:'))
let contador = numero;
while (contador >= 1) {
    console.log(contador);   
    contador--;

}