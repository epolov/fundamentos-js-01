
//1 - Declarar variable entre 0 y 100

const puntuacion = 50

//2 - IF - Comprobar validación
if (puntuacion >=70) {
    console.log('Aprobado')
}
else{
    console.log('Reprobado')
}

// 3 -Declarar variable día
const dia = 2

//4.0 dias de la semana según variable (modelo if / else if)

if (dia === 1){
    console.log('Lunes');
}
else if (dia === 2){
    console.log('Martes');
}
else if (dia === 3) {
    console.log('Miércoles');
}
else if (dia === 4) {
    console.log('Jueves');
}
else if(dia === 5) {
    console.log('Viernes');
}
else if (dia === 6){
    console.log('Sábado');
}
else if (dia === 7) {
    console.log('Domingo')
}
else{
    console.log('Día no válido')
}

// 4.1 (dias de la semana) lo mismo que el anterior pero con Switch

const dia1 = 5

// uso switch-case

switch (dia1) {
    case 1:
        console.log("LUNES");
        break;
    case 2:
        console.log("MARTES");
        break
    case 3:
        console.log("MIERCOLES");
        break
    case 4:
        console.log("JUEVES");
        break
    case 5:
        console.log("VIERNES");
        break
    case 6:
        console.log("SABADO");
        break
    case 7:
        console.log("DOMINGO");
    default:
        console.log("EL DIA INTRODUCIDO NO ES VÁLIDO");
        break
}

// 5 - DECLARAR VARIABLE TEMPERATURA CELSIUS

const temperatura = "15ºC"
