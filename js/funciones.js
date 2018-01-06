// Función para generar el mapa
function miMapa() {
	var direccion = new google.maps.LatLng(41.399238, 2.170086);
	var mapaDiv = document.getElementById("googleMap");
	var mapaProp = {center: direccion, zoom:15};
	var mapa = new google.maps.Map(mapaDiv, mapaProp);
	var marcador = new google.maps.Marker({position: direccion});
	marcador.setMap(mapa);
}

// Scroll suave en la pantalla para ir a las secciones
function scrollSmooth(id) {
	document.querySelector(id).scrollIntoView({
		 behavior: 'smooth' 
	});
}

// Funcion que permite mostrar/ocultar newsletter
var isClicked;
function showNewsletter(action) {
	btn = document.getElementById('btn-nl');
	div = document.getElementById('nl-cont'); 

	if (action == 'show') {
		// Ir arriba de la página
		window.scroll({
		 	top: 0, 
		 	left: 0, 
		 	behavior: 'smooth' 
		});

		// Mostrar formulario
		div.style.display = "block";
		setTimeout (function() {
			div.style.transition = "background-color 1s ease-out";
			div.style.backgroundColor = "rgba(255,255,255,0.5)";
			div.style.zIndex = "1";
		}, 100);
		

		// Ocultar botón
		btn.style.transition = "right 1s ease-out";
		btn.style.right = "-100px";

	} else if (action == 'hide') {
		// Ocultar formulario
		div.style.transition = "background-color 1s ease-out";
		div.style.backgroundColor = "rgba(255, 255, 255, 0)";
		setTimeout(function() {div.style.zIndex = "-1"}, 300);

		// Mostrar botón
		btn.style.transition = "right 1s ease-out";
		btn.style.right = "25px";
	}
}

// Modificar estilos del botón al hacer scroll
var lastPosition = 0
window.onscroll = function() {
	var scroll = window.scrollY;
	btn = document.getElementById('btn-nl');
	div = document.getElementById('nl-cont');

	// Verificar si el formulario está mostradao
	isShown = (div.style.backgroundColor == 'rgba(255, 255, 255, 0.5)') ? true : false;
	if (scroll > 99 && scroll < 544) {
		// Modificar botón a azul
		if (isShown && (lastPosition < scroll)) {
			// Si el formulario está mostrado, ocultarlo al hacer scroll hacia abajo
			showNewsletter('hide');
		}
		btn.style.color = "#3576BC";
		btn.style.borderColor = "#3576BC";
	} else if (scroll > 543 && scroll < 1109) {
		// Modificar botón a blanco
		btn.style.color = "#fff";
		btn.style.borderColor = "#fff";
	} else if (scroll > 1108 && scroll < 2247) {
		// Modificar botón a azul
		btn.style.display = "inline-block";
		btn.style.color = "#3576BC";
		btn.style.borderColor = "#3576BC";
	}else if (scroll >= 2247) {
		// ocultar botón para que no se muestre al final de la página
		btn.style.display = "none";
	} else {
		// estilos del botón al inicio de la página
		btn.style.color = "#fff";
		btn.style.borderColor = "#fff";
	}
	lastPosition = scroll;
}