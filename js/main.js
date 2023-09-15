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
});

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // Genera un número aleatorio de cinco dígitos para la variable 'contact_number'
      this.contact_number.value = Math.random() * 100000 | 0;
      // Estos IDs deben coincidir con los valores que configuraste en EmailJS
      emailjs.sendForm('service_5vnd5v9', 'template_ea6raia', this)
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}
