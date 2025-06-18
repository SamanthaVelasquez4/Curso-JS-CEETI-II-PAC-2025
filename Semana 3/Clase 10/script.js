//Ejercicio 1

document.getElementById("addItemBtn").addEventListener('click', function(){
    //obtener el valor del input
    let input = document.getElementById("newItemText").value.trim();

    //verificar si el value es vacio
    if(input==""){
        confirm('Ingrese algo al input de texto');
        return;
    }

    //Obtener padre
    let padre = document.getElementById("elementList");

    //crear hijo
    let hijo = document.createElement('div');
    hijo.innerHTML=input;
    hijo.classList.add('item');

    //unir hijo al padre
    padre.appendChild(hijo);

    //limpiar input
    document.getElementById("newItemText").value = "";
})

//Ejercicio 2
document.getElementById("removableList").addEventListener('click', function(evento){
    console.log(evento);

    this.removeChild(evento.target);
})

//Ejercicio 3

//agregar
document.getElementById("addDynamicItem").addEventListener('click', function(){
     //obtener el valor del input
    let input = document.getElementById("dynamicItemText").value.trim();

    //verificar si el value es vacio
    if(input==""){
        confirm('Ingrese algo al input de texto');
        return;
    }

    //Obtener padre
    let padre = document.getElementById("dynamicList");

    //crear hijo
    let hijo = document.createElement('li');
    hijo.innerHTML=input;
    hijo.classList.add('item');

    //unir hijo al padre
    padre.appendChild(hijo);

    //limpiar input
    document.getElementById("dynamicItemText").value = "";
})

//eliminar ultimo
document.getElementById("removeLastItem").addEventListener('click', function(){
    let padre = document.querySelector("#dynamicList");

    padre.lastChild.remove();
})

//limpiar todo
document.getElementById("clearAllItems").addEventListener('click', function(){
    let padre = document.querySelector("#dynamicList");

    while(padre.firstChild){
        padre.lastChild.remove();
    }
})