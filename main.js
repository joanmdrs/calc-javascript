import { Calculadora } from "./calc.js";


const calc = new Calculadora("Main");
const x = 5;
const y = 5;

console.log("Calc não é nulo: " + calc);
console.log("X = " + x);
console.log("Y = " + y);
console.log("X + Y = " + calc.sum(x, y));
console.log("X * Y = " + calc.multiply(x, y));