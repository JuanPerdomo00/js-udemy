/* 
1.Imprima las tablas de multiplicar del 2 al 12 utilizando la declaración for.

Pista: anidamiento.

2.Realice el equivalente con la declaración while y do-while
*/

function tablasMultiplicarFor(n) {
  for (let i = 0; i <= n; i++) {
    console.log(`${n} X ${i} = ${n * i}`);
  }
}

function tablasMultiplicarWhile(n) {
  let cont = 1;
  while (cont <= n) {
    console.log(`${n} X ${cont} = ${n * cont}`);
    cont += 1;
  }
}

function tablasMultiplicarDoWhile(n) {
  let cont = 1;
  do {
    console.log(`${n} X ${cont} = ${n * cont}`);
    cont += 1;
  } while (cont <= n);
}

tablasMultiplicarFor(3);
tablasMultiplicarWhile(3);
tablasMultiplicarDoWhile(3);
