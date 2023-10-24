// ejercicio 03 - Operador ternario y Tipos de Datos

// 3.1 --- Crear una variable numerica
const num = -55

// 3.2 utilizar operador ternario

const tiempoNumero = (num >= 0) ? "El valor es positivo" : "El valor negativo o igual a 0"
console.log("El numero es: ", tiempoNumero)

// 3.3 ternario longitud cadena

const cadena = "Esto"
const longitudCadena = (cadena.length >= 5) ? "La cadena es de 5 o más de 5 caracteres" : "La cadena es menor a 5 caracteres"
console.log(longitudCadena)

// 3.5 argumento de comprobacion (true o false)

const numero = 6

function esPar(numero){
    if (numero % 2 === 0) {
        console.log('El numero' + numero + 'es Par');
      }
    
    else{
        console.log('El numero' + numero + 'es Impar');
      }
    }

//const comprobarNumero = esPar(num)
//console.log("El nuero es: ", comprobarNumero)