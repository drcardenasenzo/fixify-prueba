// Ocultar el loader después de cargar la página
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000);
});

// Menú Hamburguesa
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('hidden');
}

// Cerrar menú al hacer clic fuera
document.addEventListener('click', function(event) {
    const menu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    if (!menu.contains(event.target) && !hamburger.contains(event.target) && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
    }
});

// Scroll Suave
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.nav-menu').classList.add('hidden');
    document.getElementById('user-panel').classList.add('hidden');
    document.querySelector('.main-container').classList.remove('hidden');
}

// Animación al Scrollear
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Funciones Existentes
function showLogin() {
    document.getElementById('login-screen').classList.remove('hidden');
    document.querySelector('.main-container').classList.add('hidden');
}

function hideLogin() {
    document.getElementById('login-screen').classList.add('hidden');
    document.querySelector('.main-container').classList.remove('hidden');
}

function login() {
    const phone = document.getElementById('phone-input').value;
    const password = document.getElementById('password-input').value;
    if (password === '1234') {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('user-panel').classList.remove('hidden');
    } else {
        alert('Contraseña incorrecta');
    }
}

function logout() {
    document.getElementById('user-panel').classList.add('hidden');
    document.querySelector('.main-container').classList.remove('hidden');
}

function scrollToPlans() {
    scrollToSection('plans');
}

function showServiceModal(service) {
    const modal = document.getElementById('service-modal');
    const serviceTitle = document.getElementById('service-title');
    const serviceDescription = document.getElementById('service-description');
    
    if (service === 'cerrajeria') {
        serviceTitle.textContent = 'Cerrajería';
        serviceDescription.innerHTML = '<p>Apertura de puertas en caso de emergencia, cambio de cerraduras dañadas o antiguas, reparación de sistemas de seguridad básicos y ajuste de bisagras.</p>';
    } else if (service === 'plomeria') {
        serviceTitle.textContent = 'Plomería';
        serviceDescription.innerHTML = '<p>Reparación de fugas en cañerías, destapación de desagües y cloacas, ajuste de grifos con pérdidas y mantenimiento básico de instalaciones sanitarias.</p>';
    } else if (service === 'electricidad') {
        serviceTitle.textContent = 'Electricidad';
        serviceDescription.innerHTML = '<p>Cambio de tomacorrientes defectuosos, reparación de cortocircuitos menores, instalación o reemplazo de focos de luz y ajustes eléctricos básicos en el hogar.</p>';
    } else if (service === 'otros') {
        serviceTitle.textContent = 'Otros servicios';
        serviceDescription.innerHTML = '<p><strong>Carpintería:</strong> Reparación de muebles, ajuste de puertas y ventanas.<br><strong>Gasista:</strong> Revisión de conexiones y reparación de fugas menores.<br><strong>Pintura:</strong> Retoques y pintura de pequeñas áreas.</p>';
    }
    
    modal.classList.remove('hidden');
}

function hideServiceModal() {
    document.getElementById('service-modal').classList.add('hidden');
}

function showPlanModal(plan) {
    const modal = document.getElementById('plan-modal');
    const planTitle = document.getElementById('plan-title');
    const planDescription = document.getElementById('plan-description');
    
    if (plan === 'basico') {
        planTitle.textContent = 'Plan Básico';
        planDescription.innerHTML = '<p>$20/mes. Incluye 1 servicio mensual (cerrajería: apertura de puertas, cambio de cerraduras; plomería: reparación de fugas, destapaciones; electricidad: cambio de tomacorrientes, reparación de focos), atención en 48 horas hábiles y soporte básico vía email.</p>';
    } else if (plan === 'plus') {
        planTitle.textContent = 'Plan Plus';
        planDescription.innerHTML = '<p>$50/mes. Incluye 3 servicios mensuales (todos los del plan Básico más carpintería: ajuste de puertas y muebles; gasista: revisión de conexiones), atención prioritaria en 24 horas y soporte extendido por teléfono.</p>';
    } else if (plan === 'elite') {
        planTitle.textContent = 'Plan Elite';
        planDescription.innerHTML = '<p>$70/mes. Servicios ilimitados (todos los anteriores más pintura: retoques y pequeñas áreas), atención inmediata en 12 horas y soporte premium 24/7 vía chat, teléfono y email.</p>';
    }
    
    modal.classList.remove('hidden');
}

function hidePlanModal() {
    document.getElementById('plan-modal').classList.add('hidden');
}

function showSubscribeModal() {
    document.getElementById('plan-modal').classList.add('hidden');
    document.getElementById('subscribe-modal').classList.remove('hidden');
}

function hideSubscribeModal() {
    document.getElementById('subscribe-modal').classList.add('hidden');
    document.getElementById('plan-modal').classList.remove('hidden');
}

document.getElementById('subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Suscripción confirmada con éxito!');
    hideSubscribeModal();
});

function requestService() {
    const service = document.getElementById('service-select').value;
    const day = document.getElementById('day-select').value;
    const time = document.getElementById('time-select').value;
    if (service && day && time) {
        const history = document.getElementById('service-history');
        const newService = document.createElement('li');
        newService.textContent = `${new Date().toLocaleDateString()} - ${service} (${day} - ${time}) (Solicitado)`;
        history.insertBefore(newService, history.firstChild);
        document.getElementById('service-status').textContent = `Último servicio: Solicitado (${service} - En camino)`;
        alert(`Servicio de ${service} solicitado para el ${day} en ${time}.`);
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

function showLegales() {
    document.getElementById('legales-screen').classList.remove('hidden');
}

function showArrepentimiento() {
    document.getElementById('arrepentimiento-screen').classList.remove('hidden');
}

function hideOverlay() {
    document.getElementById('legales-screen').classList.add('hidden');
    document.getElementById('arrepentimiento-screen').classList.add('hidden');
}

document.getElementById('arrepentimiento-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Solicitud de baja enviada con éxito.');
    hideOverlay();
});

// FAQ Desplegable
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
        answer.style.maxHeight = '0';
        setTimeout(() => answer.classList.add('hidden'), 300);
    }
}