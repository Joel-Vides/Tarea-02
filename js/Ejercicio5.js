// //Escriba un programa que pida una frase y escriba cuántas veces aparecen cada una de
// las vocales.

alert('----------Ejercicio 5----------');
const texto = prompt('Ingresar una Frase: ');
let contadorA = 0;
let contadorE = 0;
let contadorI = 0;
let contadorO = 0;
let contadorU = 0;

for (let i = 0; i < texto.length; i++) {
    if (texto[i].toLowerCase() === 'a') {
        contadorA++;
    }else if(texto[i].toLowerCase() === 'e'){
        contadorE++;
    }else if(texto[i].toLowerCase() === 'i'){
        contadorI++;
    }else if(texto[i].toLowerCase() === 'o'){
        contadorO++;
    }else if(texto[i].toLowerCase() === 'u'){
        contadorU++;
    }
}

console.log(`La Cantidad de Veces que Aparece la Letra 'a' es: ${contadorA}`);
console.log(`La Cantidad de Veces que Aparece la Letra 'e' es: ${contadorE}`);
console.log(`La Cantidad de Veces que Aparece la Letra 'i' es: ${contadorI}`);
console.log(`La Cantidad de Veces que Aparece la Letra 'o' es: ${contadorO}`);
console.log(`La Cantidad de Veces que Aparece la Letra 'u' es: ${contadorU}`);