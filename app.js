// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];




function agregarAmigo(){
        let amigotxt = document.getElementById('amigo');
        
        let notNum = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
        

        if(!notNum.test(amigotxt.value)){
            alert("no  se permiten numeros");
            amigotxt.value = '';
        }
        else{
            amigos.push(amigotxt.value);
            
            amigotxt.value = '';
            actualizarLista();
           
 
        }
        console.log(amigos)
}

function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`; 
    }
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    console.log(indiceAleatorio);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `🎉 Amigo Sorteado: <b>${amigoSorteado}</b> 🎉`;
}