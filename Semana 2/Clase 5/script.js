//FUNCIONES
/*
Las funciones pueden ser:
-Funciones sin parametros y sin retorno
-Funciones sin parametros y con retorno
-Funciones con parametros y sin retorno
-Funciones con parametros y con retorno 

Funciones declaradas
function nombreFuncion(parametros, separados, por, comas) {
  //codigo


  return variable/expresion;
} 
Ejemplo: Cree una función que salude a una persona
*/

//sin parametro y con retorno
let nombre = "Maria";

console.log(saludar()); //declarada

function saludar(){ //definir la funcion
  return "Hola "+nombre;
}

console.log(saludar());


//sin parametro y sin retorno
function saludar2(){
  nombre = prompt("¡Escribe tu nombre para saludarte!");
  console.log("Hola "+nombre);
}

saludar2(); //llamar a la funcion

/*
Funciones expresadas
const nombreFuncion = function(parametros) {
  return variable/expresion;
};
*/

//con parametro y sin retorno
const saludar3 = function(variable){
  console.log ("Hola "+variable);
}

nombre = "Juan";
saludar3(nombre);

/*
Funciones flecha
const nombreVariable = (parametros) => expresionRetorno;
*/

const flecha = (nombre) => console.log("Hola " + nombre);
flecha("Valeria");

/*
Funciones autoejecutables
(function() {
  instrucciones;
})();*/

(function() {
    console.log("Se ejecuta automaticamente");
})();


