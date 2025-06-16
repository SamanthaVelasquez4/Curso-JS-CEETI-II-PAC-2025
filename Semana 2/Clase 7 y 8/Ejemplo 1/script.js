
// 1. Cambiar texto del título
let titulo = document.getElementById('titulo');
titulo.innerHTML = " Cambio de titulo con js";
//titulo.innerText += " Cambio con js";

// 2. Modificar un párrafo
document.querySelector("#parrafo1").textContent = "Hola";

// 3. Cambiar atributo de un enlace
document.querySelector("#enlace").setAttribute('href', 'https://www.canva.com/design/DAGhRStcMHs/WVlrIqakl1k6gt8E60RgFQ/edit?ui=eyJIIjp7IkEiOnRydWV9fQ');

// 4. Agregar un elemento a la lista
document.getElementById("lista").innerHTML += '<li>Item 3</li>';

// 5. Insertar fila en la tabla
document.getElementById("tabla").innerHTML += "<tr><td>Ana</td><td>25</td><td>Mujer</td></tr>";

// 6. Obtener input 
function inputs(){
    let nombre = document.getElementById("nombre").value;
    let numero = document.getElementById("numero").value;
    let contrasena = document.getElementById("contrasena");
    let color = document.getElementById("color").value;
    let fecha = document.getElementById("fecha").value;
    console.log(nombre);
    console.log(numero);
    console.log(contrasena);
    console.log(color);
    console.log(fecha);

    document.getElementById("pie").style.backgroundColor = color;
}

// 7. Cambiar estilo del footer

document.getElementById("pie").style.color = "red";

