/*
 * script.js
 * Actualmente, no se requiere ninguna funcionalidad JavaScript adicional
 * para esta página. Este archivo se deja preparado para futuras mejoras
 * como menús desplegables, animaciones o integración de productos.
 */

// Cuando el documento se ha cargado, iniciamos funcionalidades interactivas.
document.addEventListener('DOMContentLoaded', () => {
  // Mensaje de confirmación en la consola
  console.log('Nuclear Hand: script cargado correctamente');

  // Efecto de máquina de escribir en el encabezado principal
  const heading = document.querySelector('.hero h1');
  if (heading) {
    const text = heading.textContent;
    heading.textContent = '';
    let index = 0;
    const speed = 80; // velocidad en milisegundos entre letras
    function typeWriter() {
      if (index < text.length) {
        heading.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
  }
});