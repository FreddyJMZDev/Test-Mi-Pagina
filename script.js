const jsStatus = document.getElementById("js-status");
const button = document.getElementById("test-button");
const message = document.getElementById("message");
const clock = document.getElementById("clock");

// Confirmar que JavaScript funciona
jsStatus.textContent = "✓";

// Botón de prueba
button.addEventListener("click", () => {
    message.textContent = "✓ JavaScript está funcionando correctamente.";
});

// Reloj
function updateClock() {
    const now = new Date();

    clock.textContent = now.toLocaleTimeString("es-CL");
}

updateClock();

setInterval(updateClock, 1000);