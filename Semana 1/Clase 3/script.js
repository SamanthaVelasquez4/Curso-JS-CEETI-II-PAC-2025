//CONDICIONALES

/* IF, ELSE, ELSE IF
if (condición) {
    --code to run if condition is true 
} else if (condition){
    --code to run if condition is true 
}else {
    --run some other code instead 
}
*/

/*Ejemplo con IF 
    Verificar si un número es positivo.
*/
let numero = parseFloat(prompt("Ingrese numero"));

if(numero>=0){
    console.log(numero + 10);
}

console.log("continua el codigo debajo del condicional");



/*Ejemplo con IF, ELSE
    Verificar si un número es par o impar.
*/
numero = parseFloat(prompt("Ingrese numero"));

if(numero % 2 == 0){
    console.log("El numero es par");
}else{
    console.log("El numero es impar");
}

console.log("continua el codigo debajo del condicional");

/*Ejemplo con IF, ELSE IF, ELSE
    Clasificar una temperatura.
    Igual o menor a 10 -> frio
    entre 10 y 25 -> agradable
    mayor de 25 -> calor
*/

let temperatura = parseFloat(prompt("Ingrese temperatura: "));

if(temperatura<=10){
    console.log("Esta haciendo frio");
}else if (temperatura>10 && temperatura<25){
    console.log("El clima es agradable");
}else{
    console.log("Esta haciendo calor");
}

console.log("continua el codigo debajo del condicional");

/* SWITCH
switch (expression) {
  case choice1:
    // run this code
    break;

  case choice2:
    // run this code instead
    break;

  // include as many cases as you like

  default:
    // actually, just run this code
    break;
}
*/

/* Ejemplo de switch
    Evaluación de notas
    nota es mayor que 8.5 -> Excelente
    nota esta entre 6 y 8.5 -> Aprobado
    nota igual a 6 -> Obtuviste el puntaje minimo para pasar
    nota es menor que 6 -> Reprobado
*/



//Normalmente los switches se utilizan para menus


