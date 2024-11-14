// Usar while, realizar la suma de todos los números pares entre N y M donde N y M los
// ingresa un usuario.

alert('----------Ejercicio 17----------');
const numero1 = parseInt(prompt('Ingresar el Primer Número:'));
const numero2 = parseInt(prompt('Ingresar el Segundo Número:'));

let contador1 = numero1;
let contador2 = numero2;

let resultado = 0;
if (numero1 < numero2) {
    while (contador1 <= numero2) {

        if (contador1 % 2 === 0) {
            resultado += contador1;
         }
        contador1++;

    }
}else{
    while (contador2 <= numero1) {
        
        if (contador2 % 2 === 0) {
            resultado += contador2;
        }
        contador2++;

    }
}

console.log(`El Resultado es de la Suma de Todos los Números Pares Entre ${numero1} y ${numero2} es: ${resultado}`);