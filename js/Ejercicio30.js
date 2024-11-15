// Crear una función que tome como parámetro un arreglo de números, retornar el número
// menor, si es un número negativo mostrar su valor absoluto.

alert('----------Ejercicio 30----------');

const numeroMenorTotal = arregloNumeros();
if (numeroMenorTotal > 0) {
    console.log(`El Número Menor del Arreglo es: ${numeroMenorTotal}`);
}

function arregloNumeros (){

    let numeros = prompt('Ingresar Números al Arreglo separados por una coma: ');
    let array = numeros.split(",").map(Number);
    let numeroMenor = array[0];
    for (let i = 0; i < array.length; i++) {

        if (array[i] < numeroMenor) {
            numeroMenor = array[i];
        }
    }

    if (numeroMenor < 0) {
        console.log(`El Numero menor es: ${numeroMenor}`);
        numeroMenor = numeroMenor * -1;
        console.log(`El Valor Absoluto es: ${numeroMenor}`);
        return;
    }

return numeroMenor;

}