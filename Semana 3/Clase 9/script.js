/*
 addEventListener
 removeEventListener
*/

document.getElementById('satisfaccion').addEventListener('input', function(){
    document.getElementById('valorSatisfaccion').innerHTML = this.value;
});

document.getElementById('miFormulario').addEventListener('submit', function(e){
    //prevenir que se recargue la pagina
    e.preventDefault();

    //validar, obtener, mostrar/guardar
    let objeto = obtenerValoresFormulario();
    mostrar(objeto);
});

//obtener
function obtenerValoresFormulario(){
    let form = document.getElementById('miFormulario');
    let formulario = {};

    formulario.nombre = form.nombre.value;
    formulario.email = form.email.value;
    formulario.password = form.password.value;
    formulario.edad = form.edad.value;
    formulario.fechaNacimiento = form.fechaNacimiento.value;
    formulario.pais = form.pais.value;
    formulario.comentario = form.comentarios.value;

    let radioButtons = document.querySelectorAll('input[name=genero]');
    
    radioButtons.forEach(function(genero){
        if(genero.checked){
            formulario.genero = genero.value;
        }
    });

    formulario.intereses = [];

    document.querySelectorAll('input[name=intereses]').forEach(function(interes){
        if(interes.checked){
           formulario.intereses.push(interes.value); 
        }
    })

    formulario.foto = form.foto.files[0].name;
    

    return formulario;


}

//funcion mostrar
function mostrar(objeto){
    const resultadoDiv = document.getElementById('resultado');
    let html = '<h2>Datos del Formulario:</h2><ul>';
    
    for (const [key, value] of Object.entries(objeto)) {
        if (Array.isArray(value)) {
            html += `<li><strong>${key}:</strong> ${value.join(', ')}</li>`;
        } else {
            html += `<li><strong>${key}:</strong> ${value || 'No especificado'}</li>`;
        }
    }
    
    html += '</ul>';
    resultadoDiv.innerHTML = html;
}