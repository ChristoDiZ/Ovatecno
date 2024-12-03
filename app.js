let currentIndex = 0;

function moveSlide(direction) {
  const carousel = document.getElementById("carousel");
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
  event.preventDefault(); // Evitar el scroll hacia arriba

  const categories = ["computacion", "accesorios", "audifonos", "juegos"];

  // Ocultar todas las categorías
  categories.forEach((cat) => {
    const categoryDiv = document.getElementById(cat);
    if (categoryDiv) {
      categoryDiv.classList.add("hidden");
    }
  });

  // Mostrar la categoría seleccionada
  const selectedCategoryDiv = document.getElementById(category);
  if (selectedCategoryDiv) {
    selectedCategoryDiv.classList.remove("hidden");
  }
}

// Cargar la categoría de computación por defecto al cargar el DOM
window.addEventListener('DOMContentLoaded', function () {
  loadCategory({ preventDefault: function() {} }, "computacion");
});

// Variable para llevar el control de la cantidad de productos en el carrito
let cartCount = 0;

// Función para agregar un producto al carrito
function addToCart() {
  cartCount++; // Incrementamos el contador
  updateCartCount(); // Actualizamos el contador en el ícono
}

// Función para actualizar el contador en el ícono del carrito
function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");
  cartCountElement.textContent = cartCount; // Actualizamos el número en el ícono

  // Si el contador llega a 0, lo mostramos como "0" en el ícono
  if (cartCount === 0) {
    cartCountElement.style.display = "none"; // Ocultamos el contador si es 0
  } else {
    cartCountElement.style.display = "flex"; // Mostramos el contador si es mayor a 0
  }
}
