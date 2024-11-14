//Escriba un programa que pida un número y diga si es divisible por 2.
alert('----------Ejercicio 3----------');
const numero = parseFloat(prompt('Ingresar un Número'));
if (numero % 2 === 0) {
    console.log(`El Número ${numero} es Divisible entre 2`);
}else{
    console.log(`El Número ${numero} No es Divisible entre 2`);
}