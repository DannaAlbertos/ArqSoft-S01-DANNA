// ==================== DATOS DE CARROS ====================
const cars = [
    {
        id: 1,
        name: "Ferrari F8 Tributo",
        brand: "Ferrari",
        type: "V12",
        image: "https://images.pexels.com/photos/29831790/pexels-photo-29831790.jpeg",
        hp: "720 HP",
        speed: "340 km/h",
        acceleration: "2.9s"
    },
    {
        id: 2,
        name: "Lamborghini Revuelto",
        brand: "Lamborghini",
        type: "Híbrido",
        image: "https://images.pexels.com/photos/37147592/pexels-photo-37147592.jpeg",
        hp: "1001 HP",
        speed: "350 km/h",
        acceleration: "2.5s"
    },
    {
        id: 3,
        name: "Porsche 911 Turbo",
        brand: "Porsche",
        type: "V8",
        image: "https://images.pexels.com/photos/33621572/pexels-photo-33621572.jpeg",
        hp: "640 HP",
        speed: "330 km/h",
        acceleration: "2.7s"
    },
    {
        id: 4,
        name: "McLaren 720S",
        brand: "McLaren",
        type: "V8",
        image: "https://images.pexels.com/photos/12568066/pexels-photo-12568066.jpeg",
        hp: "710 HP",
        speed: "341 km/h",
        acceleration: "2.8s"
    },
    {
        id: 5,
        name: "Bugatti Chiron",
        brand: "Bugatti",
        type: "V12",
        image: "https://images.pexels.com/photos/12964186/pexels-photo-12964186.jpeg",
        hp: "1500 HP",
        speed: "420 km/h",
        acceleration: "2.4s"
    },
    {
        id: 6,
        name: "Rolls-Royce Phantom",
        brand: "Rolls-Royce",
        type: "V12",
        image: "https://images.pexels.com/photos/26161350/pexels-photo-26161350.jpeg",
        hp: "563 HP",
        speed: "250 km/h",
        acceleration: "5.1s"
    },
    {
        id: 7,
        name: "Ferrari SF90 Stradale",
        brand: "Ferrari",
        type: "Híbrido",
        image: "https://images.pexels.com/photos/32261029/pexels-photo-32261029.jpeg",
        hp: "986 HP",
        speed: "340 km/h",
        acceleration: "2.5s"
    },
    {
        id: 8,
        name: "Lamborghini Aventador",
        brand: "Lamborghini",
        type: "V12",
        image: "https://images.pexels.com/photos/6968984/pexels-photo-6968984.jpeg",
        hp: "759 HP",
        speed: "350 km/h",
        acceleration: "2.9s"
    }
];

// ==================== TYPEWRITER EFFECT ====================
function typewriter(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Iniciar typewriter al cargar
window.addEventListener('load', () => {
    typewriter(document.getElementById('typewriter'), 'Descubre los Carros Más Rápidos del Mundo', 50);
});

// ==================== RENDERIZAR CARROS ====================
function renderCars(carsToRender = cars) {
    const grid = document.getElementById('carsGrid');
    grid.innerHTML = '';
    
    carsToRender.forEach((car, index) => {
        const card = document.createElement('div');
        card.className = 'car-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="car-card-inner">
                <div class="car-card-front">
                    <div class="car-card-image-wrapper">
                        <img src="${car.image}" alt="${car.name}" class="car-card-image">
                        <div class="car-badge">${car.type}</div>
                    </div>
                    <div class="car-card-body">
                        <h3 class="car-card-title">${car.name}</h3>
                        <p class="car-card-subtitle">${car.brand}</p>
                        <p class="car-card-description">Uno de los carros deportivos más icónicos del mundo</p>
                        <button class="btn btn-primary" onclick="this.closest('.car-card').classList.toggle('flipped')">
                            Ver Especificaciones
                        </button>
                    </div>
                </div>
                <div class="car-card-back">
                    <div class="car-specs">
                        <div class="spec-item">
                            <span class="spec-label">Potencia</span>
                            <span class="spec-value">${car.hp}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Velocidad Máx</span>
                            <span class="spec-value">${car.speed}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">0-100 km/h</span>
                            <span class="spec-value">${car.acceleration}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Motor</span>
                            <span class="spec-value">${car.type}</span>
                        </div>
                    </div>
                    <button class="btn btn-primary" onclick="this.closest('.car-card').classList.toggle('flipped')">
                        Volver
                    </button>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// ==================== FILTROS ====================
function filterCars() {
    const brand = document.getElementById('filterBrand').value;
    const type = document.getElementById('filterType').value;
    
    const filtered = cars.filter(car => {
        return (!brand || car.brand === brand) &&
               (!type || car.type === type);
    });
    
    renderCars(filtered);
}

// Event listeners para filtros
document.getElementById('filterBrand').addEventListener('change', filterCars);
document.getElementById('filterType').addEventListener('change', filterCars);

// ==================== CONTAR NÚMEROS ====================
function countUp(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Activar contadores cuando se ven
const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-count'));
            countUp(entry.target, target);
            countObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(element => {
    countObserver.observe(element);
});

// ==================== CARRUSEL DE DATOS ====================
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function showTestimonial(index) {
    testimonials.forEach(card => card.classList.remove('active'));
    testimonials[index].classList.add('active');
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Auto-play datos
setInterval(nextTestimonial, 5000);

// ==================== HAMBURGER MENU ====================
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Cerrar menu al hacer click en un link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// ==================== SCROLL NAVBAR ====================
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

navbar.style.transition = 'transform 0.3s ease';

// ==================== RIPPLE EFFECT ====================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Estilos para ripple
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== INICIALIZAR ====================
renderCars();

console.log('🏎️ Catálogo de Carros Deportivos - Proyecto Escolar Cargado');
