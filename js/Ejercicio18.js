// Todos los ejercicios de while anteriores los debe replicar con el ciclo for.

alert('----------Ejercicio 18----------');
// Usando for mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo
// ingresa el usuario en un prompt.
const numero = parseInt(prompt('Ingresar la Cantidad de Números que Desea:'))
console.log(`Los Números de 1 a ${numero} aumentado de 1 en 1 son:`);

for (let i = 1; i <= numero; i++) {
    console.log(i);
}


// Usando for mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo
// ingresa el usuario en un prompt.
alert('----------Ejercicio 18----------');

console.log('<------------------------------------->');

const numero2 = parseInt(prompt('Ingresar la Cantidad de Números que Desea:'))
console.log(`Los Números de 1 a ${numero2} aumentado de 2 en 2 son:`);
for (let i = 0; i <= numero2; i=i+2) {
    console.log(i);   
}


// Usando for mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo
// ingresa el usuario en un prompt.
alert('----------Ejercicio 18----------');
console.log('<----------------------------------->');


const numero3 = parseInt(prompt('Ingresar la Cantidad de Números que Desea:'))
    console.log(`Los Números de 1 a ${numero3} Disminuyendo de 1 en 1 son:`);
for (let i = numero3; i >= 1; i--) {
    console.log(i);
}


// Usando for, solicitar al usuario un número y utilizando console.log para mostrar la
// tabla del número hasta 12.
alert('----------Ejercicio 18----------');
console.log('<----------------------------------->');

const numero4 = parseInt(prompt('Ingresar un Número:'))
console.log(`La tabla de ${numero4} Hasta el 12 es: `);

let resultado0;
for (let i = 1; i <= 12; i++) {
    resultado0 = i * numero4;
    console.log(resultado0);
}