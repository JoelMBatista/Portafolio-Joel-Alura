// Reemplaza con tus propias credenciales de Email.js
const emailjsConfig = {
    service_id: 'service_z7lcjjm',
    template_id: 'template_68g3e0g',
    user_id: 'TCyJEH7k1UHtFRowU'
};

// Función para enviar el formulario
function sendEmail(event) {
    event.preventDefault();
    const btn = document.querySelector('[data-Btn');
    btn.textContent = "Enviando...."

    // Obtener los datos del formulario
    const name = document.querySelector('[data-Name').value;
    const email = document.querySelector('[data-Email]').value;
    const subject = document.querySelector('[data-Subject]').value;
    const message = document.querySelector('[data-Message]').value;

    // Enviar el mensaje utilizando Email.js
    emailjs.send(
        emailjsConfig.service_id,
        emailjsConfig.template_id,
        {
            name: name,
            email: email,
            subject: subject,
            message: message,
            reply_to: email
        },

        emailjsConfig.user_id
    ).then(
        function(response) {
            alert('¡Mensaje enviado con éxito!');
            document.querySelector('[data-contactForm]').reset();
            btn.textContent = "Enviar mensaje"
        },
        function(error) {
            alert('Error al enviar el mensaje. Por favor, intenta nuevamente.' +  JSON.stringify(error));
        }
    );
}

// Escuchar el evento submit del formulario y llamar a la función sendEmail
document.querySelector('[data-contactForm]').addEventListener('submit', sendEmail);
