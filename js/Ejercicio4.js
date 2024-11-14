//Escriba un programa que pida una frase y escriba cuantas veces aparece la letra a.
alert('----------Ejercicio 4----------');
const texto = prompt('Ingresar una Frase: ');
let contador = 0;

for (let i = 0; i < texto.length; i++) {
    if (texto[i].toLowerCase() === 'a') {
        contador++;
    }
}

console.log(`La Cantidad de Veces que Aparece la Letra 'a' es: ${contador}`);