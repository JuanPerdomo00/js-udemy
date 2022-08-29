/* 
! Variables

Hay tres formas de definir una varibles
1 var
2 let
3 conts
*/

// declarar y asiganar
var nombre = "jakepys";
console.log(nombre);

var persona = {
  nombre: "Juan",
  apellido: "Perdomo",
  edad: 19,
  direccion: {
    calle: "404",
    numeroDeCalle: 22 - 22,
  },
  futurosViajes: ["Suiza", "Francia", "Italia", "Berlin", "Varsovia"],
  esCasado: false,
};

console.log(persona);

// let solo es uan variable de bloque

{
  let name = "japy";
  console.log(name);
}
// console.log(name);

// const es una constante y no se puede re definir  y su valor no va cambiar

const PI = Math.PI;
console.log(PI);
console.log()
