let currentIndex = 0;

function moveSlide(direction) {
  const carousel = document.getElementById('carousel');
  const totalSlides = carousel.children.length;
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Cambiar automáticamente cada 3 segundos
setInterval(() => {
  moveSlide(1); // Llamamos a moveSlide con dirección 1 para avanzar a la siguiente imagen
}, 3000); // 3000 milisegundos = 3 segundos

  // Función para cargar la categoría seleccionada
  function loadCategory(event, category) {
    event.preventDefault();  // Evitar el scroll hacia arriba
    
    const categories = ['computacion', 'accesorios', 'audifonos', 'juegos'];

    // Ocultar todas las categorías
    categories.forEach(cat => {
      const categoryDiv = document.getElementById(cat);
      if (categoryDiv) {
        categoryDiv.classList.add('hidden');
      }
    });

    // Mostrar la categoría seleccionada
    const selectedCategoryDiv = document.getElementById(category);
    if (selectedCategoryDiv) {
      selectedCategoryDiv.classList.remove('hidden');
    }
  }

  // Cargar la categoría de computación por defecto
  loadCategory(event, 'computacion');

  