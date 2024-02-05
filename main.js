// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonType = this.querySelector('div').textContent;
            
            switch(buttonType) {
                case 'Teléfono':
                    window.location.href = 'tel:+52 3336404854'; // Reemplaza con tu número de teléfono
                    break;
                case 'WhatsApp':
                    window.open('https://api.whatsapp.com/send?phone=+523336404854&text=Contacto%20web:%20Quiero%20informacion%20sobre...', '_blank');
                    break;
                case 'Cómo llegar':
                    window.open('https://maps.app.goo.gl/zsyzpQZx1pNjSzYU7', '_blank'); // Reemplaza con tu enlace de Google Maps
                    break;
                case 'Programar cita de ventas':
                    window.location.href = '#formulario'; // Reemplaza con tu enlace para programar citas de ventas
                    break;
                case 'Agendar cita de servicio':
                    window.location.href = '#formulario'; // Reemplaza con tu enlace para agendar citas de servicio
                    break;
            }
        });
    });
});


// Selecciona todas las tarjetas
var cards = document.querySelectorAll('.container-fluid4 .card');

// Añade un event listener a cada tarjeta
cards.forEach(function(card) {
    card.addEventListener('mouseover', function() {
        // Cuando se pasa el mouse sobre la tarjeta, cambia la clase h-50 a h-60
        this.classList.remove('h-50');
        this.classList.add('h-60');
    });

    card.addEventListener('mouseout', function() {
        // Cuando se quita el mouse de la tarjeta, cambia la clase h-60 de nuevo a h-50
        this.classList.remove('h-60');
        this.classList.add('h-50');
    });
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 600) { // ajusta este valor a la altura en la que quieres que el elemento se convierta en fixed
        $('.container-fluid').addClass('fixed-top');
    } else {
        $('.container-fluid').removeClass('fixed-top');
    }
});