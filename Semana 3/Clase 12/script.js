// Datos de tweets (simulando una base de datos)
let tweets = [
    {
        id: 1,
        content: "¡Hola mundo! Este es mi primer tweet.",
        likes: 3,
        comments: [
            { id: 1, content: "¡Bienvenido a Twitter!" },
            { id: 2, content: "Gran primer tweet 😊" }
        ]
    },
    {
        id: 2,
        content: "Aprendiendo a manipular el DOM con JavaScript.",
        likes: 5,
        comments: [
            { id: 3, content: "JavaScript es genial!" }
        ]
    },
    {
        id: 3,
        content: "Tweet creado",
        likes: 0,
        comments:[
            {id: 4, content: "Prueba"}
        ]
    }
];

// Contador para IDs
let contTweet=4;
let contcomment=5;

// Función para renderizar todos los tweets
function renderizarTweets (){
    let contenedor = document.getElementById("tweets-container");
    contenedor.innerHTML="";

    tweets.forEach(tweet=>{
        contenedor.appendChild(crearTweet(tweet));
    })

}

// Función para crear un elemento tweet
function crearTweet(tweet){

    //variables
    let nuevoTweet = document.createElement('div');
    let htmlComments = "";

    nuevoTweet.classList.add("tweet");

    //comentarios
    tweet.comments.forEach(comment => {
        htmlComments +=`<div class="comment">${comment.content}</div>`; 
    });

    nuevoTweet.innerHTML=`
    <div class="tweet-content">${tweet.content}</div>
    <div class="tweet-actions">
        <button class="action-btn like-btn">
            <i class="fa-solid fa-heart" style="color: #ff0000;"></i>
            <span class="like-count">${tweet.likes}</span>
        </button>
        <button class="action-btn comment-btn">
            <div style="display: flex; gap:10px" onclick="visualizarComentario(${tweet.id})"> 
                <i class="fa-regular fa-comment"></i>
                Comentar 
            </div>
        </button>
    </div>
    <div class="comment-form" style="display: none;" id="tweet-${tweet.id}">
        <input type="text" class="comment-input" placeholder="Escribe un comentario..." id="inputComentario${tweet.id}">
        <button class="add-comment-btn" onclick="agregarComentario(${tweet.id})">Agregar comentario</button>
    </div>
    <div class="comments">
        ${htmlComments}
    </div>`;

    return nuevoTweet;
}

// Función para publicar un nuevo tweet
document.getElementById("tweet-button").addEventListener('click',function(){
    let input = document.getElementById("tweet-input");

    if(input.value.trim()==""){
        return alert("Tweet vacio!");
    }

    //crear el objeto del tweet
    let nuevoTweet = {
        id: contTweet,
        content: input.value,
        likes: 0,
        comments:[]
    }

    tweets.unshift(nuevoTweet); //meter el objeto a la lista
    contTweet ++; //sumar contador
    input.value=""; //limpiar input


    renderizarTweets(); //volver a renderizar
})

// Función para dar/quitar like


// Función para agregar comentario
function visualizarComentario(id){
    //obtengamos el div del tweet
    let tweetDiv = document.getElementById(`tweet-${id}`);
    if(tweetDiv.style.display === "block"){
        tweetDiv.style.display = "none";
    }else{
        tweetDiv.style.display = "block";
    }
}

function agregarComentario(idTweet){
    let idInt = parseInt(idTweet);
    let input = document.getElementById(`inputComentario${idTweet}`);

    //validar que el input este lleno
    if (input.value==""){
        alert("Input vacio");
        return;
    }

    //agregar comentario
    let tweet = tweets.find(objeto => objeto.id === idInt);
    let comentario = {
       id: contcomment,
        content: input.value
    }
    tweet.comments.push(comentario);
    contcomment ++;

    renderizarTweets();
}

//Funcion extra
function presionarEnter(evento) {
    if (evento.key === 'Enter' && !evento.shiftKey) {
        evento.preventDefault();
        publicarTweet();
    }
};

// Renderizar tweets iniciales
renderizarTweets();
