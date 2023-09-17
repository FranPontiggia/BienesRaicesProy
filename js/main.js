document.addEventListener("DOMContentLoaded", function () {
  const quienesSomosLink = document.querySelector('a[href="#quienes_somos"]');
  const parrafoQuienesSomos = document.getElementById('parrafo-quienes-somos');

  quienesSomosLink.addEventListener('click', function (event) {
    event.preventDefault();
    parrafoQuienesSomos.classList.toggle('highlighted');
    setTimeout(() => {
      parrafoQuienesSomos.classList.toggle('highlighted');
    }, 1000);
  });

  // Inicializa EmailJS
  (function() {
    // MI clave pública de EmailJS
    emailjs.init('NFZ0f8AnPcq8mlMM-');
  })();

  


window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const btn = document.querySelector('button[type="submit"]');
    btn.value = 'Enviando...';

    const serviceID = 'service_ndf8bew';
    const templateID = 'template_ea6raia';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'ENVIAR MENSAJE';
        document.getElementById('success-message').classList.remove('d-none');
      })
      .catch((err) => {
        btn.value = 'ENVIAR MENSAJE';
        document.getElementById('error-message').classList.remove('d-none');
        console.error('Error al enviar el mensaje:', err);
      });
  });
};