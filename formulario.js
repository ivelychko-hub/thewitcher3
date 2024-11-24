// Obtén el formulario y los campos
const formulario = document.getElementById('formulario');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

// Añadir el evento de envío del formulario
formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores del email y las contraseñas
    const emailValue = email.value;
    const pass1 = password1.value;
    const pass2 = password2.value;

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato del email
    if (!emailRegex.test(emailValue)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    // Comprobar que las contraseñas coinciden y tienen al menos 8 caracteres
    if (pass1 !== pass2) {
        alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
    } else if (pass1.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
    } else {
        alert("Formulario enviado con éxito.");
        // Aquí puedes añadir la lógica para enviar el formulario si todo es correcto
    }
});