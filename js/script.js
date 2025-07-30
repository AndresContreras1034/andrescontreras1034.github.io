// Carrusel automático
const slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide() {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    index = (index + 1) % slides.length;
}

setInterval(showSlide, 4000);

// Dark Mode
const toggleDarkMode = document.getElementById('dark-mode-toggle');
toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
