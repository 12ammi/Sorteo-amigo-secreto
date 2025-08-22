let amigos = [];
let amigosDisponibles = [];

// Agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    amigos.push(nombre);
    amigosDisponibles.push(nombre);
    mostrarLista();
    input.value = "";
}

// Mostrar lista de amigos
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Sortear amigo
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpiar antes de mostrar

    if (amigosDisponibles.length === 0) {
        // ⚠️ ya no quedan nombres
        resultado.innerHTML = "<li>🎉 Ya se sortearon todos los amigos 🎉</li>";
        return;
    }

    // Escoger aleatoriamente
    const indice = Math.floor(Math.random() * amigosDisponibles.length);
    const seleccionado = amigosDisponibles[indice];

    // Eliminar el nombre sorteado para no repetir
    amigosDisponibles.splice(indice, 1);

    // Mostrar el nombre sorteado
    resultado.innerHTML = `<li>🎁 El amigo secreto es: <strong>${seleccionado}</strong></li>`;
}
