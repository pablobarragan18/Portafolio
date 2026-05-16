const textElement = document.getElementById('typing-text');
const phrases = [
    "Desarrollador Web",
    "UI Developer",
    "Entusiasta del Backend",
    "Frontend Developer",
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150; // Velocidad normal de escritura

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        // Quita una letra
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // Borra más rápido
    } else {
        // Añade una letra
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 150;
    }

    // Lógica de cambio de estado
    if (!isDeleting && charIndex === currentPhrase.length) {
        // Ya terminó de escribir: pausa antes de borrar
        isDeleting = true;
        typeSpeed = 2000; // Se queda quieto 2 segundos
    } else if (isDeleting && charIndex === 0) {
        // Ya terminó de borrar: pasa a la siguiente frase
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Pausa antes de empezar a escribir la nueva
    }

    setTimeout(type, typeSpeed);
}

// Iniciar la animación al cargar la página
document.addEventListener('DOMContentLoaded', type);