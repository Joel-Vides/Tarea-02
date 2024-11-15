// Crear una función que devuelva el promedio de un arreglo, en caso de que el arreglo este
// vacío debe devolver cero.

alert('----------Ejercicio 29----------');

let promedio = PromedioTotal();
console.log(`El Promedio es: ${promedio}`);

function PromedioTotal() {

    const numero = prompt("Ingresar los números separados por comas: ");

    const array = numero.split(",").map(Number);

    if (array.length === 0) {
        return 0;
    }

    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }

    let promedio = suma / array.length;
    return promedio;
}