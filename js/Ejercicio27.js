// Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
// solo los números pares, pista: utilizar reduce().

alert('----------Ejercicio 27----------');

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numerosPares(array));


function numerosPares(numeros) {
    return numeros.reduce((resultado, numero) => {
        if (numero % 2 === 0) {
            resultado[resultado.length] = numero;
        }
        return resultado;
    }, []);
}