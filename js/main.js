// Agrega el evento para resaltar el párrafo cuando se hace clic en el enlace interno
document.addEventListener("DOMContentLoaded", function () {
    const quienesSomosLink = document.querySelector('a[href="#quienes_somos"]');
    const parrafoQuienesSomos = document.getElementById('parrafo-quienes-somos');
  
    quienesSomosLink.addEventListener('click', function (event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace interno
      parrafoQuienesSomos.classList.toggle('highlighted'); // Alterna la clase 'highlighted' en el párrafo
      setTimeout(() => {
        parrafoQuienesSomos.classList.toggle('highlighted'); // Quita la clase 'highlighted' después de 1 segundo
      }, 1000);
    });
  });
  
  
  
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
  
  
    


