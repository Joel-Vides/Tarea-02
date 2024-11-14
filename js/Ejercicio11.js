// Determinar si una palabra empieza con mayúscula o no.

alert('----------Ejercicio 11----------');
const palabra = prompt('Ingresar una Palabra:');
const primeraLetra = palabra.charAt(0);
if (primeraLetra === primeraLetra.toUpperCase() && /[A-Z]/.test(primeraLetra)) {
    console.log(`La Palabra '${palabra}' Empieza con Mayuscula.`);
}else{
    console.log(`La Palabra '${palabra}' NO Empieza con Mayuscula`);
}