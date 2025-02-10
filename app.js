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


