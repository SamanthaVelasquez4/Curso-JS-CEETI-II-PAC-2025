/*
LOCALSTORAGE
Caracterosticas:
1. Almacena datos como pares clave-valor
2. Los datos persisten incluso después de cerrar el navegador
3. Límite de almacenamiento de aproximadamente 5MB por dominio
4. Solo puede almacenar strings (para objetos hay que convertirlos a JSON)
    parseInt
    parseFloat
    JSON.stringify(objeto) -> convierte un objeto a cadena
    JSON.parce(objetoGuardado) -> convierte de cadena a objeto
*/

//guadar datos setItem(clave, valor)
localStorage.setItem("nuevo", "prueba");

//guardar un objeto
let objeto = {
    id: 2,
    valor: "Objeto de prueba"
}

localStorage.setItem("objeto", JSON.stringify(objeto));

//obtener datos getItem
let cont = parseInt(localStorage.getItem("contador"));

console.log(cont + 15 );

let usuarios = localStorage.getItem("usuarios");

console.log(usuarios);

//borrar un objeto removeItem()
//localStorage.removeItem("nuevo");

//borrar todo
//localStorage.clear();

//traer un objeto que no existe
