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
}else if (temperatura>10 && temperatura<25){ //pueden haber mas else if
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

/*Dias de la semana
1 ->lunes
2->Martes
3-> miercoles
...
7->Domingo */

numero = parseInt(prompt("Ingrese un numero"));

switch (numero){
    case 1: //numero==1
        console.log("Lunes");
        break;
    case 3:  //numero==2
        console.log("Miercoles");
        break;
    case 2:
        console.log("Martes");
        break;
    case 4: 
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6: 
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default: 
        console.log("Opción inválida");
}

if(numero==1){
    console.log("Lunes");
}else if (numero==2){
    console.log("Martes");
}else if(numero==3){
    console.log("Miercoles");
}else{
    console.log("Opcion invalida");
}


/* Ejemplo de switch
    Evaluación de notas
    nota es mayor que 8.5 -> Excelente
    nota esta entre 6 y 8.5 -> Aprobado
    nota igual a 6 -> Obtuviste el puntaje minimo para pasar
    nota es menor que 6 -> Reprobado
*/

let nota = parseFloat(prompt("Ingrese nota del estudiante: "));

switch(true){
    case (nota>8.5): //10 es igual a 10 mayor que 8.5
        console.log("Excelente");
        break;
    case (nota>6 && nota<=8.5):
        console.log("Aprobado");
        break;
    case (nota==6):
        console.log("Nota minima para pasar");
        break;
    case (nota<6):
        console.log("Reprobado");
        break;
    default:
        console.log("Ocurrio un error.");
}


//Normalmente los switches se utilizan para menus
/*
Bienvenido a la calculadora
¿Que operacion deseas realizar?
1. Suma
2. Reta
3. Multiplicacion
4. Division
Ingrese el numero correspondiente a la operacion: 
*/

let operacion = parseInt(prompt("Bienvenido a la calculadora\n¿Que operacion deseas realizar?\n1. Suma\n2. Reta\n3. Multiplicacion\n4. Division\nIngrese el numero correspondiente a la operacion: "));

switch(operacion){
    case 1:
        console.log("suma");
        break;
    case 2:
        console.log("resta");
        break;
    case 3:
        console.log("Multiplicacion");
        break;
    case 4:
        console.log("Division");
        break;
    default:
        console.log("Opcion invalida");
}

