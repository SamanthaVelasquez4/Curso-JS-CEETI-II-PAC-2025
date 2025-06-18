
let cantidadMeGusta = 125;

document.getElementById("like-btn1").addEventListener('click', function (){
    let heart = this.firstChild;

    if(heart.classList.contains("fa-regular")){
        heart.classList.remove("fa-regular");
        heart.classList.add("fa-solid");
        heart.classList.add("liked");
        cantidadMeGusta += 1;
    }else{
        heart.classList.add("fa-regular");
        heart.classList.remove("fa-solid");
        heart.classList.remove("liked");
        cantidadMeGusta -= 1;
    }
    
    document.getElementById("likes-count1").innerText = cantidadMeGusta + " me gusta";
});


document.getElementById("comment-input1").addEventListener('input', function(e){
    let btnPublicar = document.getElementById("post-comment1");
    if(this.value != ""){
        btnPublicar.classList.add("active");
    }else{
        btnPublicar.classList.remove("active");
    }
})

document.getElementById("post-comment1").addEventListener('click', function(){
    let input1 = document.getElementById("comment-input1");
    let commentSection = document.getElementById("comments1");
    if(input1.value != ""){
        commentSection.innerHTML += `<div class="comment">
            <span class="comment-username">Yo</span>
            <span>${input1.value}</span>
            </div>`;

        input1.value = "";
    }
})

document.getElementById("share-btn1").addEventListener('click', function(){
    alert("Publicación compartida con exito");
})
