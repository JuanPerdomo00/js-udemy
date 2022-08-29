/* 
2.Escribir un programa que según el total de la compra, se agregue un valor de envio.

Si la compra es menor o igual a los $10 se agregará un gasto de envió de $3

Si la compra es menor o igual a los $20 y mayor a los $10 se agregará un gasto de envío de $5

Si la compra es menor o igual a los $50 y mayor a los $20 se agregará un gasto de envío de $7

Si la compra supera los $50 el gasto de envío será gratuito
*/

let compra = false;

if (compra <= 10) {
  compra += 3;
  console.log(`Se le agrega gasto de envio de $3. Total pagar: $${compra}`);
} else if (compra <= 20 && compra > 10) {
  compra += 5;
  console.log(`Se le agrega gasto de envio de $5. Total pagar: $${compra}`);
} else if (compra <= 50 && compra > 20) {
  compra += 7;
  console.log(`Se le agrega gasto de envio de $5. Total pagar: $${compra}`);
} else if (compra > 50) {
  console.log(
    `Usted supero el gasto de $50, su envio sera gratuito. Total pagar: $${compra}`
  );
} else {
  console.log("Promocion no valida, por favor verifique nueva mente.");
}
