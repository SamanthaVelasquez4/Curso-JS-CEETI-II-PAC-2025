//fetch -> GET (read)
fetch('https://jsonplaceholder.typicode.com/albums')
.then(response => response.json())
.then(json => console.log(json));



//Async Await
async function obtenerInformacion(){
    let respuesta = await fetch('https://jsonplaceholder.typicode.com/albums');
    let albums = await respuesta.json();

    //rederizar 
    renderizar(albums);
}

function renderizar(lista){

    let contenedor = document.getElementById('albums-list');
    let innerHTML = "";

    lista.forEach(album => {
        innerHTML += `<div class="album-item" data-id="${album.id}" onclick="clicAlbum(this)">
            <div class="album-title">${album.title}</div>
            <div class="album-meta">ID: ${album.id} | UserID: ${album.userId}</div>
          </div>`;
    });

    contenedor.innerHTML = innerHTML;
}

function clicAlbum (albumActual){
    //quitar clase active a todos album
    document.querySelectorAll(".album-item").forEach(album => album.classList.remove('active'));

    //poner la clase active al album que le di clic
    albumActual.classList.add("active");
}



obtenerInformacion();