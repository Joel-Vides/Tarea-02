alert('----------Ejercicio 1----------\nIngresar dos Números');
const numero1 = parseFloat(prompt("Ingresar el Primer Número:"));
const numero2 = parseFloat(prompt("Ingresar el Segundo número:"));

if(numero1===numero2){
    console.log('Los Números son Iguales');
}else{
    if (numero1>numero2) {
        console.log(`El Número ${numero1} es el Mayor.`);
    }else{
        console.log(`El Número ${numero2} es el Mayor.`);
    }
}
