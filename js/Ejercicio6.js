// Escribir un programa que escriba en pantalla los divisores de un número dado.

alert('----------Ejercicio 6----------');
const numero = parseFloat(prompt('Ingresar un Número: '));
console.log(`Los Divisores de ${numero} son:`);

for (let i = 0; i < numero; i++) {
    if (numero % i === 0) {
        console.log(i);
    }
}