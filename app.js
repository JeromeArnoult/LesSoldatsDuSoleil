/* -----Navigation----- */
const menu = document.querySelector('.liste-nav');
const btnMenu = document.querySelector('.btn-toggle-container');
const btn = document.querySelector('.btn1');
const menuItems = document.querySelectorAll('.item-nav a');

// Ouvrir/fermer le menu lors du clic sur le bouton
btnMenu.addEventListener('click', function() {
    menu.classList.toggle('active-menu');
    btn.classList.toggle('active');
});

// Fermer le menu lors du clic sur un lien
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        menu.classList.remove('active-menu');
        btn.classList.remove('active');
    });
});

//---- Carroussel

// Variables de base
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
let totalSlides = slides.length;

// Fonction pour mettre à jour la position du carrousel
function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

// Fonction pour mettre à jour l'état des points
function updateDots() {
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Fonction pour aller au slide suivant
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Infini
    updateCarousel();
}

// Fonction pour aller au slide précédent
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Infini
    updateCarousel();
}

// Gestion des clics sur les flèches
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Gestion des clics sur les points
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Défilement automatique toutes les 3 secondes (optionnel)
//setInterval(nextSlide, 3000);