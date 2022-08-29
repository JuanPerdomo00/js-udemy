/* 
funciones
*/

// forma declarativa
function saludar() {
  console.log("Hola Soy Jakepys");
}

saludar();

function saludar(nombre) {
  console.log(`Hola Soy ${nombre}`);
}

saludar("UN genio perdido en la tierra");

// return
function sumar(a, b) {
  return a + b;
}

let resultSuma = sumar(32, 3);
console.log(resultSuma);

// funciones anonimas
let resta = function (a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else {
    return "Solo datos numericos";
  }
};

console.log(resta(34, 3));

// funciones de flecha (arrow function)
let multiplicar = (a, b) => {
  return a * b;
};

console.log(multiplicar(12, 2));

let dividir = (a, b) => a / b;
console.log(dividir(6, 3));
