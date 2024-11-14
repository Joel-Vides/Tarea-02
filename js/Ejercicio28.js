// Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
// contenga sólo las palabras que empiezan con una vocal.

alert('----------Ejercicio 28----------');

let palabras = ["azul", "casa", "silla", "agua", "mesa", "rosa", "elefante", "oso"];
let palabrasVocal = vocales(palabras);

console.log(palabrasVocal);

function vocales(palabras) {
    let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let palabrasVocal = [];


    for (let i = 0; i < palabras.length; i++) {
        let primeraLetra = palabras[i].charAt(0);

        for (let j = 0; j < vocales.length; j++) {

            if (primeraLetra === vocales[j]) {
                palabrasVocal[palabrasVocal.length] = palabras[i];
                break;
            }

        }

    }

    return palabrasVocal;
}