// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');
    if (nombre == '')
        alert ("Por favor, inserte un nombre");
    else if (amigos.includes(nombre))
        alert ("El nombre ya está en la lista");
    else {
        amigos.push(nombre);
        listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
        resultado.innerHTML = '';
        resultado.classList.remove('resultado-sorteo');
        limpiarcaja();
    }
}

function limpiarcaja() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    const boton = document.getElementsByClassName('button-draw')[0];
    const resultado = document.getElementById('resultado');
    const listaAmigos = document.getElementById('listaAmigos');

    // Si el botón está en modo "Nuevo Sorteo", reinicia la interfaz
    if (boton.innerHTML.includes('Nuevo Sorteo')) {
        boton.innerHTML = `<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sortear amigo`;
        resultado.innerHTML = '';
        resultado.classList.remove('resultado-sorteo');
        listaAmigos.innerHTML = '';
        amigos = [];
        return;
    }

    let cantidadAmigos = amigos.length;
    if (cantidadAmigos < 2) {
        alert("Debe haber al menos 2 amigos para sortear");
    } else {
        let amigoAsignado =  Math.floor(Math.random()*cantidadAmigos);
        let amigoSecreto = amigos[amigoAsignado];
        resultado.innerHTML = `Su Amigo Secreto es: <strong>${amigoSecreto}</strong>`;
        resultado.classList.add('resultado-sorteo');
        boton.innerHTML = 'Nuevo Sorteo';
        listaAmigos.innerHTML = '';
        amigos = [];
    }
}

