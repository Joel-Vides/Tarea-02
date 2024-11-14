// Crear una función que reciba un número entero y muestre un error si el tipo de dato
// pasado es de otro tipo.

alert('----------Ejercicio 21----------');

const numero = parseInt(prompt('Ingresar un Número Entero:'))
entero(numero);

function entero(a) {
    if (!a > 0 || !a < 0) {
        console.log(`No es un Número Entero`);
    }else{
        console.log(`El Número ${a} es un Entero`);
    }
}