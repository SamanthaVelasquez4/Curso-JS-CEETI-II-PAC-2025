//FETCH -> GET
/*fetch('https://jsonplaceholder.typicode.com/albums')
  .then(respuesta => respuesta.json())
  .then(albumes => console.log(albumes));*/
//variables 
let cont =0;
let albums= [];

//LocalStorage
if(localStorage.getItem('contador')){
  cont = parseInt(localStorage.getItem('contador'));
}else{
  cont = 101;
}

if(localStorage.getItem('albums')){
  albums= JSON.parse(localStorage.getItem('albums'));
  renderizar(albums);
}else{
  main();
}


// AYNC y AWAIT
async function main() {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  albums = await response.json();
  //console.log(albums);
  //guardar en localstorage 
  localStorage.setItem('albums', JSON.stringify(albums));

  //renderizar
  renderizar(albums);
}

//Renderizar
function renderizar(lista){
  let contenedor = document.getElementById("albums-list");
  let innerHtml = "";

  lista.forEach(album => {
    innerHtml += `<div class="album-item" id="${album.id}">
                    <div class="album-title">${album.title}</div>
                    <div class="album-meta">ID: ${album.id} | UserID: ${album.userId}</div>
                  </div>`;
  });

  contenedor.innerHTML = innerHtml;

  //funcion que se ejecuta cada vez que se hace clic en un album
  //obtenemos todos los albumes
  document.querySelectorAll(".album-item").forEach(album =>{
    //agregar funcion clic
    album.addEventListener('click', function(){
      clicAlbum(this);
    })
  });

  //crear album
  //Cambiar inputs
  document.getElementById('form-title').innerHTML = "Crear Album";
  document.getElementById('album-id').value = cont;
  document.getElementById('album-userid').value = "";
  document.getElementById('album-title').value = "";
  document.getElementById('btn-action').textContent = "Guardar";
  document.getElementById('btn-delete').hidden = true;
}

function clicAlbum(albumActual){
  //Obtenemos todos los albumes para quitar la clase active
  document.querySelectorAll(".album-item").forEach(album=>{
    album.classList.remove('active'); //quitar la clase active 
  });
  albumActual.classList.add('active'); //poner la clase active solo al que se le dio clic
  //console.log(albumActual);

  // Obtener el elemento .album-title dentro del elemento clickeado
  let albumTitle = albumActual.querySelector('.album-title').textContent;
    
  // Obtener el UserID del texto (asumiendo que siempre está en el formato "ID: X | UserID: Y")
  let albumMeta = albumActual.querySelector('.album-meta').textContent;
  let userId = albumMeta.split('UserID: ')[1]; // Extrae el número después de "UserID: "
  
  //poner información en los inputs
  document.getElementById('form-title').innerHTML = "Editar Album";
  document.getElementById('album-id').value = albumActual.id;
  document.getElementById('album-userid').value = userId;
  document.getElementById('album-title').value = albumTitle;
  document.getElementById('btn-action').textContent = "Guardar cambios";
  document.getElementById('btn-delete').hidden = false;
}

document.getElementById('new-album-btn').addEventListener('click', function(){
  //Cambiar inputs
  document.getElementById('form-title').innerHTML = "Crear Album";
  document.getElementById('album-id').value = cont;
  document.getElementById('album-userid').value = "";
  document.getElementById('album-title').value = "";
  document.getElementById('btn-action').textContent = "Guardar";
  document.getElementById('btn-delete').hidden = true;
})

document.getElementById('btn-action').addEventListener('click', function(){
  //obtener informacion de los inputs y validar inputs
  let id1 =  document.getElementById('album-id').value;
  let title1= document.getElementById('album-title').value;
  let userId1 = document.getElementById('album-userid').value;
  
  if(id1 != "" && title1!="" && userId1!=""){
    let nuevoAlbum = {
      id: id1,
      title: title1,
      userId: userId1
    }

    if(this.textContent == "Guardar"){//creando album
      albums.push(nuevoAlbum);
      cont++;
      renderizar(albums);

      //guardar cont en localstorage
      localStorage.setItem('contador', cont);
    }else{//actualizando cambios
      //buscar indice del album
      let index = albums.findIndex(album => album.id == id1);
      albums[index] = nuevoAlbum;
      renderizar(albums);
    }

    //guardar en localstorage
    localStorage.setItem('albums', JSON.stringify(albums));
  }else{
    alert("Campos vacios");
  }
})

document.getElementById('btn-delete').addEventListener('click', function(){
  //obtener id
  let id1 =  document.getElementById('album-id').value;

  //buscar indice del album
  let index = albums.findIndex(album => album.id == id1);
  console.log(index);
  albums.splice(index,1);
  renderizar(albums);

  //guardar en localstorage
  localStorage.setItem('albums', JSON.stringify(albums));
})