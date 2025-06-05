//BUCLES

/* WHILE - mientras
while (condition) {
  // code to run

  final-expression
}

Pide al usuario un número N y usa while para calcular 
la suma de los números del 1 hasta N.

primera vuelta
suma=0
contador=1

suma = 0 + 1 =1
contador =2

segunda vuelta
suma=1
contador=2

suma=1+2=3
contador=3

tercera vuelta
suma=3
contador=3

suma =3+3=6
contador=4



1+2+3+4+5+6+7+8+9+10
1
1+2=3

*/
let numero = parseInt(prompt("Ingrese un numero: "));
let contador = 1; 
let suma=0;

while(contador<=numero){
  suma = suma + contador;
  contador++; //el contador va a ir sumandose de uno en uno
};

console.log(suma);

/* DO... WHILE -  Hacer mientras
do {
// code to run

  final-expression
} while (condition)

Solicitar un número mayor que 0
*/



/*FOR
for (initializer; condition; final-expression) {
  // code to run
}
*/



/* FOR... OF
for (const item of array) {
  // code to run
}
*/
