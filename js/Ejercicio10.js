// Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se
// determine si el triángulo es válido o no.

alert('----------Ejercicio 10----------');
const angulo1 = parseFloat(prompt('Ingresar el Primer Ángulo:'));
const angulo2 = parseFloat(prompt('Ingresar el Segundo Ángulo:'));
const angulo3 = parseFloat(prompt('Ingresar el Tercer Ángulo:'));

if (angulo1 + angulo2 + angulo3 === 180) {
    console.log(`Es un Triángulo Válido`);   
}else{
    console.log(`No es un Triángulo Válido`);
}