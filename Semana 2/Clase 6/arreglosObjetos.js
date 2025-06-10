//crear objeto
let maria = {
    "nombre" : "Maria Jose",
    "apellido": "Flores Gonzales",
    "edad": 25,
    "genero": true, //true = mujer y false = hombre
    "identidad": "0801-2000-32658"
};

let pedro = {
    "nombre" : "Pedro",
    "apellido": "Valladares",
    "edad": 30,
    "genero": false, //true = mujer y false = hombre
    "identidad": "0801-1995-32658"
};

let personas =[maria,pedro];

//console.log(personas);

personas.push({
    "nombre" : "Marcos",
    "apellido": "Villeda",
    "edad": 30,
    "genero": false, //true = mujer y false = hombre
    "identidad": "1701-1995-32658"
});

//console.log(personas.length);

//console.log(personas[2]);

//buscar la persona con dicha identidad
let persona = personas.filter(objeto => objeto.genero == true);
console.log(persona);

//buscar un elemento
let persona2 = personas.find(function(objeto){
    if(objeto.identidad == '1701-1995-3265'){
        return objeto;
    }
});

console.log(persona2);