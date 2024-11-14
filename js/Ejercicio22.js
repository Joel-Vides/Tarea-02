// Dado el array = [1,2,3,4,5,6]
alert('----------Ejercicio 22----------');
// a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en
// pantalla.
const array = [1, 2, 3, 4, 5, 6]
let contador = 0;
while (contador < array.length) {
    console.log(array[contador]);
    contador++;
}

// b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
// pantalla.
console.log('\nUtilizando for');
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
console.log('\nTodos los Elementos del Array Sumandoles 1 a Cada Uno:');
for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + 1;
    console.log(array[i]);
}
// e. Generar una copia de un array pero con todos los elementos incrementados en 1.
console.log('\nGenerar una copia de un array pero con todos los elementos incrementados en 1:');
const array2 = [5];
console.log(`El Array Original [${array}]`);

for (let i = 0; i < array.length; i++) {
    array2[i] = array[i] + 1;
    console.log(array2[i]);
    
}