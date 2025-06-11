// 1. Cambiar texto del título innerHTML o innerText
let titulo = document.getElementById("titulo");
console.log(titulo);
titulo.innerHTML = " Titulo cambiado con JS";
//titulo.innerText += " Cambio con js";

// 2. Modificar un párrafo -> textContent
document.getElementById("parrafo1").textContent = "Este es la informacion del nuevo parrafo.";

// 3. Cambiar atributo de un enlace -> setAtribute('atributo', 'valor')
document.querySelector("#enlace").setAttribute('href', 'https://www.repsol.com/es/energia-futuro/tecnologia-innovacion/inteligencia-artificial/index.cshtml');

// 4. Agregar un elemento a la lista
document.querySelector("#lista").innerHTML += "<li>Item 3</li>";

// 5. Insertar fila en la tabla
document.getElementById("tabla").innerHTML +=
`<tr>
    <td>Sam</td>
    <td>21</td>
    <td>Mujer</td>
</tr>`;

// 6. Obtener input 

// 7. Cambiar estilo del footer ->style


