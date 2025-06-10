//ARREGLOS

//crear un arreglo
let frutas = [];
let numero = [5,10,15,20,25,30,35,40];

//acceder a un elementos
//console.log(numero[5]);
numero[5] = 'cambio';
//console.log(numero[5]);

//console.log(numero[100]);

//agregar mas elementos
frutas.push('Manzana');
frutas.push('Pera');
frutas.push('Uva');
numero.push(45);
numero.push(50);
frutas.unshift('Fresa');
frutas.unshift('Mango');

//console.log(frutas);

//eliminar elementos
frutas.shift();
frutas.pop();

//console.log(frutas);
/*
Funciones de arreglos
push() => Agrega al final
pop() => Elimina el ultimo
unshift() => Agrega al inicio
shift() => Elimina el primero
length => longitud del arreglo
indexOf() => Índice de un elemento
includes() => Verifica si contiene un elemento
slice() => Corta una parte del arreglo	
*/

//console.log(frutas.length);
//console.log(numero.length);

/*Recorrer un arreglo (for o forEach)
array.forEach(function(elemento) {
  console.log(elemento);
});
*/

for(let i = 0; i<=frutas.length-1; i++){
    //console.log(frutas[i]);
}

numero.forEach(function(elemento){
    //console.log(elemento*5);
});


//OBJETOS
/*
 nombreObjeto = {
    attributo1 : valor1,
    attributo2 : valor2,
    attributo3 : valor3,
    ...
 }
*/

//crear objeto
let maria = {
    "nombre" : "Maria Jose",
    "apellido": "Flores Gonzales",
    "edad": 25,
    "genero": true, //true = mujer y false = hombre
};

let pedro = {
    "nombre" : "Pedro",
    "apellido": "Valladares",
    "edad": 30,
    "genero": false, //true = mujer y false = hombre
};

//acceder a atributos
//console.log(maria.genero);

//agregar atributos-
maria.identidad = "0801-2000-32658";
pedro["identidad"] = "1701-1995-25412";

//console.log(maria);
//console.log(pedro);

/*borrar
delete maria.identidad;
console.log(maria);*/

/*recorer un objeto (for in)
for (let clave in objeto) {
  console.log(clave + ": " + objeto[clave]);
}
*/
/*for (let clave in maria){
    console.log(clave + ": " + maria[clave]);
}*/