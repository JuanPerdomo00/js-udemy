/*
Condicionales
*/

let llueve = true;

if (llueve) {
  console.log("Esta lloviendo jsjs");
} else {
  console.log("No esta lloviendo");
}

let admin = "administrator";

if (admin === "administrator") {
  console.log("welcome admin jakepy");
}

const MAYOR__DE_EDAD = 18;
let edadUsuser = 18;

if (edadUsuser < MAYOR__DE_EDAD) {
  console.log("Eres menor de edad");
} else if (edadUsuser >= MAYOR__DE_EDAD) {
  console.log("Eres mayor de edad");
} else {
  console.log("Osea que edad tienes? ingresaste el dato correcto?");
}

let semaforo = "rojo";
if (semaforo === "verde") {
  console.log("Arranca");
} else if (semaforo === "amarillo") {
  console.log("Espera");
} else if (semaforo === "rojo") {
  console.log("Apagar el motor");
} else {
  console.log("Te pasaste el cemaforo, ahora te persigrun 200 patrullas jsjs");
}

// switch
let listaFrutas = ["papayas", "freesas", "manzannas", "bananass"];

switch (listaFrutas.length >= 4) {
  case listaFrutas[0] === "papaya":
    console.log(`La ${listaFrutas.at(0)}`);
    break;
  case listaFrutas[1] === "fresas":
    console.log(`Las ${listaFrutas.at(1)}`);
    break;
  case listaFrutas[2] === "manzanas":
    console.log(`Las ${listaFrutas.at(2)}`);
    break;
  case listaFrutas[3] === "bananas":
    console.log(`Las ${listaFrutas.at(3)}`);
    break;
  default:
    console.log("No se encuentra en la lista");
    break;
}
