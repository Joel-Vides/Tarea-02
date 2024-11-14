// Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y
// 10, luego a el usuario se le pedirá que introduzca un número en un popup
// para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el
// programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje de
// "Vuelva a intentarlo"

alert('----------Ejercicio 12----------');
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

const numero = parseInt(prompt('Ingresar un Número del 1 al 10: '));

if (numero > 10 || numero < 1) {

    console.log('Ingresar un Número del 1 al 10');

}else{

    if (numero === numeroAleatorio) {
        console.log('Buen Trabajo!');
    }else{
        console.log(`El Número Aleatorio era ${numeroAleatorio}\nVuelva a Intentarlo`);
    }

}