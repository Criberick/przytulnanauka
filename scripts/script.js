let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document
                    .querySelector('header nav a[href*="' + id + '"]')
                    .classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// Pobierz przycisk
const toggleButton = document.getElementById("theme-toggle");
const iconElement = toggleButton.querySelector("i")

// Funkcja do aktualizacji ikony na podstawie trybu
function updateButtonIcon() {
    if (document.body.classList.contains('light-mode')) {
        iconElement.className = 'bx bx-moon'; // Ikona księżyca
    } else {
        iconElement.className = 'bx bx-sun'; // Ikona słońca
    }
}

// Dodaj obsługę kliknięcia
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    updateButtonIcon(); // Zaktualizuj ikonę po zmianie trybu
});

// Ustaw ikonę na starcie
updateButtonIcon();