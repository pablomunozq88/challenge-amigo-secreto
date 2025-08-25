// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let nombre;
let cantidadAmigos;
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre == '')
        alert ("Por favor, inserte un nombre")
    else if (amigos.includes(nombre))
        alert ("El nombre ya está en la lista")
    else {
        amigos.push(nombre);
        asignarTextoElemento('ul', amigos.map(amigo => `<li>${amigo}</li>`).join(' '));
        console.log(amigos);
        limpiarcaja();
    }
}
function limpiarcaja() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    cantidadAmigos = amigos.length;
    if (cantidadAmigos < 2) {
        alert("Debe haber al menos 2 amigos para sortear");
    } else {
        let amigoAsignado =  Math.floor(Math.random()*cantidadAmigos);
        let amigoSecreto = amigos[amigoAsignado];
        asignarTextoElemento('ul', `Su Amigo Secreto es: ${amigoSecreto}`);
    }
}

