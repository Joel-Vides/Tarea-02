alert('----------Ejercicio 2----------\nIngresar Tres Números');
const numero1 = parseFloat(prompt('Ingresar el Primero Número: '));
const numero2 = parseFloat(prompt('Ingresar el Segundo Número: '));
const numero3 = parseFloat(prompt('Ingresar el Tercer Número: '));

if (numero1 === numero2 && numero1 === numero3) {
    console.log('Los Números son Iguales');
}else{
    if (numero1 > numero2 && numero1 > numero3) {
        console.log(`El Número ${numero1} es el Mayor`);
    }else if (numero2 > numero1 && numero2 > numero3){
        console.log(`El Número ${numero2} es el Mayor`);
    }else{
        console.log(`El Número ${numero3} es el Mayor`);
    }
}