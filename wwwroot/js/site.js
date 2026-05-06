// ============================================
// CATÁLOGO DE CARROS - ANIMACIONES Y EFECTOS
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // Animación de entrada para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar todas las cards
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });

    // Efecto de sonido al hover (simulado con vibración en móviles)
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', function () {
            if (navigator.vibrate) {
                navigator.vibrate(10);
            }
        });

        button.addEventListener('click', function (e) {
            // Efecto ripple
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
            ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Indicador de velocidad animado
    createSpeedIndicator();

    // Efecto parallax en las cards
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                const xRotation = ((y / rect.height) - 0.5) * 10;
                const yRotation = ((x / rect.width) - 0.5) * -10;
                card.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) translateY(-10px) scale(1.02)`;
            }
        });
    });

    // Resetear transformación cuando el mouse sale
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });

    // Contador de RPM animado
    animateRPM();

    // Partículas de velocidad
    createSpeedParticles();

    // Efecto de luces de freno al hacer scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            document.body.style.setProperty('--scroll-glow', 'rgba(220, 0, 0, 0.2)');
        } else {
            // Scrolling up
            document.body.style.setProperty('--scroll-glow', 'rgba(0, 212, 255, 0.2)');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);

    // Auto-completar formularios con efecto
    document.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('input', function () {
            if (this.value.length > 0) {
                this.style.borderColor = 'var(--neon-blue)';
                this.style.boxShadow = '0 0 10px rgba(0, 212, 255, 0.3)';
            } else {
                this.style.borderColor = '';
                this.style.boxShadow = '';
            }
        });
    });

    // Filtro de búsqueda animado
    const searchInput = document.querySelector('input[type="search"], input[placeholder*="Buscar"]');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const searchTerm = this.value.toLowerCase();
            document.querySelectorAll('.card').forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    card.style.display = '';
                    card.style.animation = 'fadeInUp 0.4s ease-out';
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => {
                        if (!card.textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
                            card.style.display = 'none';
                        }
                    }, 300);
                }
            });
        });
    }
});

// Función para crear indicador de velocidad
function createSpeedIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'speed-indicator';
    indicator.innerHTML = 'RPM';
    document.body.appendChild(indicator);
}

// Animación de RPM
function animateRPM() {
    const indicator = document.querySelector('.speed-indicator');
    if (!indicator) return;

    let rpm = 0;
    setInterval(() => {
        rpm = Math.floor(Math.random() * 9000) + 1000;
        const displayRPM = (rpm / 1000).toFixed(1);
        indicator.innerHTML = `${displayRPM}<small style="font-size: 0.6rem;">K</small>`;
    }, 2000);
}

// Partículas de velocidad
function createSpeedParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    document.body.insertBefore(particlesContainer, document.body.firstChild);

    function createParticle() {
        const particle = document.createElement('div');
        const color = Math.random() > 0.5 ? 'rgba(220, 0, 0, 0.3)' : 'rgba(0, 212, 255, 0.3)';
        const size = Math.random() * 3 + 1;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            right: -10px;
            top: ${Math.random() * 100}%;
            animation: particleMove ${Math.random() * 3 + 2}s linear;
            box-shadow: 0 0 10px ${color};
        `;

        particlesContainer.appendChild(particle);

        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }

    // CSS para animación de partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleMove {
            to {
                transform: translateX(-100vw);
                opacity: 0;
            }
        }
        
        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: rgba(220, 0, 0, 0.4);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Crear partículas periódicamente
    setInterval(createParticle, 200);
}

// Función para añadir efecto hover 3D mejorado
function enhance3DEffect() {
    document.querySelectorAll('.card').forEach(card => {
        card.style.transition = 'transform 0.1s ease-out';
    });
}

enhance3DEffect();

// Easter egg: Konami Code para modo turbo
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateTurboMode();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateTurboMode() {
    document.body.style.animation = 'turboShake 0.5s ease-in-out';
    const allCards = document.querySelectorAll('.card');
    allCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = 'fadeInUp 0.3s ease-out';
        }, index * 50);
    });

    setTimeout(() => {
        document.body.style.animation = '';
    }, 500);
}

const turboStyle = document.createElement('style');
turboStyle.textContent = `
    @keyframes turboShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(turboStyle);

console.log('%c🏎️ CATÁLOGO DE CARROS ACTIVADO 🏎️', 'color: #DC0000; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);');
console.log('%c¡Intenta el código Konami para activar el modo turbo! ↑↑↓↓←→←→BA', 'color: #00d4ff; font-size: 12px;');