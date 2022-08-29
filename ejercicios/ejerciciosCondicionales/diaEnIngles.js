/* 
! 1.Escribir un programa que según el día de la semana ingresado proporcione el día en inglés.
*/

let diaDeLaSemana = "martes";

switch (diaDeLaSemana !== "") {
  case diaDeLaSemana === "lunes":
    console.log("Monday");
    break;
  case diaDeLaSemana === "martes":
    console.log("Tuesday");
    break;
  case diaDeLaSemana === "miercoles":
    console.log("Wednesday");
    break;
  case diaDeLaSemana === "jueves":
    console.log("Thursday");
    break;
  case diaDeLaSemana === "viernes":
    console.log("Friday");
    break;
  case diaDeLaSemana === "sabado":
    console.log("Saturday");
    break;
  case diaDeLaSemana === "domingo":
    console.log("Sunday");
    break;
  default:
    console.log("Day of semant not valit");
    break;
}
