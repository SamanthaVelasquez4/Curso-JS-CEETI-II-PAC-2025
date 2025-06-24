//Validar si el usuario existe en el localStorage
let usuario = JSON.parse(localStorage.getItem("usuario"));

if(usuario != null){
    //Mostrar informacion del usuario
    let divInfo = document.getElementById("info");
    divInfo.innerHTML = `<h2> Hola ${usuario.nombre}</h2>`;

    ocultarInputs();
    document.body.classList.remove("oscuro", "claro");
    document.body.classList.add(usuario.tema);

}

function actualizar(){
    usuario = JSON.parse(localStorage.getItem("usuario"));
    if(usuario == null){
        //traer información de los inputs
        obtenerInformacion();
    }else{
        //Mostrar informacion del usuario
        let divInfo = document.getElementById("info");
        divInfo.innerHTML = `<h2> Hola ${usuario.nombre}</h2>`;

        usuario.tema = obtenerTema();

        //ocultar inputs
        ocultarInputs();
    }

    document.body.classList.remove("oscuro", "claro");
    document.body.classList.add(usuario.tema);

    localStorage.setItem("usuario", JSON.stringify(usuario));
}

function cerrar(){
    localStorage.removeItem("usuario");

    //borrar la info 
    document.getElementById("info").innerHTML="";
    mostrarInputs();

    document.body.classList.remove("oscuro", "claro");
    document.body.classList.add("claro");
}

//document.getElementById("cerrar").addEventListener("click", cerrar());

function obtenerInformacion(){
    //traer inputs
    let nombre = document.getElementById("nombre");
    let edad = document.getElementById("edad");
    let opcionUsuario = obtenerTema();

    //validaciones
    if(nombre.value =="" || edad.value==""){
        alert("Campos vacios");
        return;
    }

    usuario = {
        nombre: nombre.value,
        edad: edad.value,
        tema: opcionUsuario
    }

    localStorage.setItem("usuario", JSON.stringify(usuario));
    ocultarInputs();
    //Mostrar informacion del usuario
    let divInfo = document.getElementById("info");
    divInfo.innerHTML = `<h2> Hola ${usuario.nombre}</h2>`;
}

function mostrarInputs (){
    let nombre = document.getElementById("nombre");
    let edad = document.getElementById("edad");

    nombre.style.display = "block";
    edad.style.display = "block";

    nombre.value="";
    edad.value="";
}

function ocultarInputs (){
    let nombre = document.getElementById("nombre");
    let edad = document.getElementById("edad");

    nombre.style.display = "none";
    edad.style.display = "none";
}

function obtenerTema (){
    //obtener tema
    document.querySelectorAll("input[name=tema]").forEach(tema =>{
        if(tema.checked){
            opcionUsuario = tema.value;
        }
    })

    return opcionUsuario;
}