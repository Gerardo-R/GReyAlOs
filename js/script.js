function validarFormulario(event) {
  var nombre = document.getElementById("nombre");
  var email = document.getElementById("email");
  var mensaje = document.getElementById("mensaje");
  // validar campos
  if (nombre.value.trim() === "" || email.value.trim() === "" || mensaje.value.trim() === "") {
    event.preventDefault();
    alert("Por favor completa todos los campos.");
  }
}


function limpiarCampos() {
    document.getElementById("contact-form").reset();
}

function mapa(){
    // Creamos el mapa y definimos las coordenadas del marcador
    var map = L.map('map').setView([17.078016987466253, -96.74435334720452], 13);

    // Agregamos la capa de OpenStreetMap al mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);

    // Agregamos el marcador al mapa
    L.marker([17.078016987466253, -96.74435334720452]).addTo(map)
  .bindPopup("<b>GReyAlOs</b><br>Estamos aquí.<br><a href='https://www.google.com/maps?q=17.078016987466253,-96.74435334720452' target='_blank'><i class='fas fa-map-marker-alt'></i> Ver en Google Maps</a>").openPopup();


}

function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
  
  function setupMenu() {
    var toggleButton = document.getElementById("toggle-button");
    var menu = document.getElementById("menu");
  
    // Ocultar el menú al cargar la página
    menu.style.display = "none";
  
    // Mostrar u ocultar el menú al hacer clic en el botón de alternancia
    toggleButton.addEventListener("click", function() {
      toggleMenu();
    });
  
    // Mostrar el menú si la pantalla es lo suficientemente grande
    window.addEventListener("resize", function() {
      if (window.innerWidth >= 768) {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
      }
    });
  }

  setupMenu();
