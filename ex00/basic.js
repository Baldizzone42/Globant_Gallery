const apiKey = '5Xy35DlF7soe_6YgZCxdJoNz2VviKwb52YmyWR5TsDQ'; // Tu Access Key
const gallery = document.getElementById('gallery');
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('searchButton'); // Obtener el botón de búsqueda

async function fetchPhotos(query = '') {
    if (!query) return; // Si no hay consulta, no hacer nada

    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    displayPhotos(data.results); // Cambia según la estructura de la respuesta
}

function displayPhotos(photos) {
    gallery.innerHTML = ''; // Limpiar la galería antes de agregar nuevas fotos
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.urls.small; // Ajusta según la estructura de la respuesta
        img.alt = photo.description || 'Imagen sin d5 scripción'; // Ajusta según la estructura de la respuesta
        gallery.appendChild(img);
    });
}

// Función de búsqueda
function performSearch() {
    const query = searchInput.value.trim(); // Obtener el valor del input y eliminar espacios
    fetchPhotos(query); // Llamar a la función de búsqueda
}

// Evento de búsqueda al presionar el botón
searchButton.addEventListener('click', performSearch);

// Evento de búsqueda al presionar Enter
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch(); // Llamar a la función de búsqueda
    }
});

// Cargar fotos al inicio (opcional, puedes eliminar si no quieres cargar fotos automáticamente)
fetchPhotos();