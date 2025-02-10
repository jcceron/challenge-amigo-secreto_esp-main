// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    // Capturamos el valor del campo de entrada
    let capturaNombre = document.getElementById("amigo");
    let nombre = capturaNombre.value.trim(); // Eliminamos espacios en blanco al inicio y al final

    // Validamos que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregamos el nombre al array de amigos
    amigos.push(nombre);

    // Limpiamos el campo de entrada
    capturaNombre.value = "";

    // Mostramos la lista actualizada en la página
    actualizarListaAmigos();
}


function actualizarListaAmigos() {
    // Obtenemos el elemento de la lista en el HTML
    let lista = document.getElementById("listaAmigos");

    // Limpiamos la lista existente para evitar duplicados
    lista.innerHTML = "";

    // Iteramos sobre el array de amigos y agregar cada nombre como un <li>
    for (let i = 0; i < amigos.length; i++) {
        let elemento = document.createElement("li");
        elemento.textContent = amigos[i]; // Asignar el nombre al elemento <li>
        lista.appendChild(elemento); // Agregar el elemento a la lista en el HTML
    }
}


