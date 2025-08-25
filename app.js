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
    let titulo = document.getElementById('tituloListaAmigos');
    if (!titulo) {
        titulo = document.createElement('h3');
        titulo.id = 'tituloListaAmigos';
        titulo.textContent = 'Lista de Amigos';
        listaAmigos.parentNode.insertBefore(titulo, listaAmigos);
    }
    if (nombre == '')
        alert ("Por favor, inserte un nombre"); // no permite entradas vacías
    else if (amigos.includes(nombre)){// No permite entradas duplicadas
        alert ("El nombre ya está en la lista");
        limpiarcaja();
    }
    else {
        amigos.push(nombre); // ingresa un nuevo amigo
        listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
        resultado.innerHTML = '';
        resultado.classList.remove('resultado-sorteo');
        limpiarcaja();
        titulo.style.display = amigos.length ? 'block' : 'none';
    }
}

function limpiarcaja() {
    document.querySelector('#amigo').value = '';
}
// sortea un amigo al azar
function sortearAmigo() {
    const boton = document.getElementsByClassName('button-draw')[0];
    const resultado = document.getElementById('resultado');
    const listaAmigos = document.getElementById('listaAmigos');
    let titulo = document.getElementById('tituloListaAmigos');
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
        alert("Debe haber al menos 2 amigos para sortear");//minimo de amigos para sortear
    } else {
        let amigoAsignado =  Math.floor(Math.random()*cantidadAmigos);
        let amigoSecreto = amigos[amigoAsignado];
        resultado.innerHTML = `Su Amigo Secreto es: <strong>${amigoSecreto}</strong>`;
        resultado.classList.add('resultado-sorteo');
        boton.innerHTML = 'Nuevo Sorteo';//cambia funcion del boton luego de sortear
        listaAmigos.innerHTML = '';
        if (titulo) titulo.style.display = 'none'; // <-- Oculta el título
        amigos = [];
    }
}

