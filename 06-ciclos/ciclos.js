/* 
! ciclos
*/

// while
let i = 10;
let con = 1;

while (con <= i) {
  console.log(`Me repito ${con} veces`);
  con += 1;
}

// do while
let j = 10;
let cn = 1;

do {
  console.log(`Me repito ${cn} veces`);
  cn += 1;
} while (cn > j);

// ciclo for
for (let i = 1; i <= 10; i++) {
  console.log(`Me repito ${i} veces`);
}

// for in

let object = {
  nombre: "jakepy",
  edad: 19,
  saludarJakepy() {
    console.log(`Hola ${this.nombre}`);
  },
};

for (const key in object) {
  console.log(object[key]);
}

object["saludarJakepy"]();

// for of
let array = [1, false, true, "hola", "pedro", 3.3, { name: "pigitz" }];

for (let valor of array) {
  console.log(valor);
}
