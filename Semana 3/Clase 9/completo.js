 // Mostrar valor del rango
 document.getElementById('satisfaccion').addEventListener('input', function() {
    document.getElementById('valorSatisfaccion').textContent = this.value;
});

// Manejar envío del formulario
document.getElementById('miFormulario').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validar formulario
    if (validarFormulario()) {
        // Obtener todos los valores
        const datos = obtenerValoresFormulario();
        
        // Mostrar resultados
        mostrarResultados(datos);
    }else{
        console.log("Alguno de los campos esta incorrecto");
    }

    
});

// Función para validar el formulario
function validarFormulario() {
    let valido = true;
    
    // Limpiar errores anteriores
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    
    // Validar nombre
    const nombre = document.getElementById('nombre').value.trim();
    if (nombre === '') {
        document.getElementById('errorNombre').textContent = 'El nombre es requerido';
        valido = false;
    }
    
    // Validar email
    const email = document.getElementById('email').value.trim();
    if (email === '') {
        document.getElementById('errorEmail').textContent = 'El email es requerido';
        valido = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {//regex
        document.getElementById('errorEmail').textContent = 'Ingrese un email válido';
        valido = false;
    }
    
    // Validar contraseña
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('errorPassword').textContent = 'La contraseña debe tener al menos 6 caracteres';
        valido = false;
    }
    
    // Validar checkboxes (al menos uno seleccionado)
    const checkboxes = document.querySelectorAll('input[name="intereses"]:checked');
    if (checkboxes.length === 0) {
        document.getElementById('errorIntereses').textContent = 'Seleccione al menos un interés';
        valido = false;
    }
    
    return valido;
}

// Función para obtener todos los valores del formulario
function obtenerValoresFormulario() {
    const form = document.getElementById('miFormulario');
    const formData = {};
    
    // Obtener valores de inputs normales
    formData.nombre = form.nombre.value;
    formData.email = form.email.value;
    formData.password = form.password.value;
    formData.edad = form.edad.value;
    formData.fechaNacimiento = form.fechaNacimiento.value;
    formData.pais = form.pais.value;
    
    // Obtener radio button seleccionado
    formData.genero = document.querySelector('input[name="genero"]:checked')?.value || '';
    
    // Obtener checkboxes seleccionados
    formData.intereses = [];
    document.querySelectorAll('input[name="intereses"]:checked').forEach(checkbox => {
        formData.intereses.push(checkbox.value);
    });
    
    formData.comentarios = form.comentarios.value;
    
    // Obtener archivo (solo el nombre)
    formData.foto = form.foto.files[0]?.name || '';
    
    formData.satisfaccion = form.satisfaccion.value;
    formData.colorFavorito = form.colorFavorito.value;
    
    return formData;
}

// Función para mostrar los resultados
function mostrarResultados(data) {
    const resultadoDiv = document.getElementById('resultado');
    let html = '<h2>Datos del Formulario:</h2><ul>';
    
    for (const [key, value] of Object.entries(data)) {
        if (Array.isArray(value)) {
            html += `<li><strong>${key}:</strong> ${value.join(', ')}</li>`;
        } else {
            html += `<li><strong>${key}:</strong> ${value || 'No especificado'}</li>`;
        }
    }
    
    html += '</ul>';
    resultadoDiv.innerHTML = html;
}