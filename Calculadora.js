const dividir = require("./funciones/division.js");
const multiplicar = require("./funciones/multiplicacion.js");
const suma = require("./funciones/suma.js");
const restar = require("./funciones/resta.js");

num1 = 6
num2 = 9
const resultado = dividir(num1,num2)
console.log(" Realizamos la division de dos numeros: ")
console.log(resultado)

parametro1 = 7 
parametro2 = 25
const resultado2 = restar(parametro1,parametro2)
 console.log("Realizamos la resta de dos numero: ")
 console.log(parametro2 + " - " + parametro1 + " = " + resultado2)

numero1 = 6
numero2 = 6
 const resultado3 = multiplicar(numero1,numero2)
console.log(" Realizamos la multiplicacion de dos numeros: ")
console.log(numero1 + " * " + numero2 + " = " + resultado3)


const param1 = 3
const param2 = 52
let resultado4 = suma(param1,param2)
console.log(" Realizamos la suma de dos numeros: ")
console.log(param1 + " + " + param2 + " = " + resultado4)

