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

const toggleButton = document.getElementById("theme-toggle");
const iconElement = toggleButton.querySelector("i")

function updateButtonIcon() {
    if (document.body.classList.contains('light-mode')) {
        iconElement.className = 'bx bx-moon';
    } else {
        iconElement.className = 'bx bx-sun';
    }
}

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    updateButtonIcon();
});

updateButtonIcon();

document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("logo");
    let isOriginal = true;
    const isMobile = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    if (!isMobile) {
        logo.addEventListener("mouseenter", function () {
            logo.style.opacity = "0";
            setTimeout(() => {
                logo.src = "assets/domain_logo.png";
                logo.style.opacity = "1";
                isOriginal = false;
            }, 400);
        });
        
        logo.addEventListener("mouseleave", function () {
            logo.style.opacity = "0";
            setTimeout(() => {
                logo.src = "assets/tetiana_avatar.png";
                logo.style.opacity = "1";
                isOriginal = true;
            }, 400);
        });
    } else {
        logo.addEventListener("click", function() {
            logo.style.opacity = "0";
            setTimeout(() => {
                logo.src = isOriginal ? "assets/domain_logo.png" : "assets/tetiana_avatar.png";
                logo.style.opacity = "1";
                isOriginal = !isOriginal;
            }, 400);
        });
    }

    setTimeout(() => {
        setInterval(() => {
            logo.style.opacity = "0";
            setTimeout(() => {
                logo.src = isOriginal ? "assets/domain_logo.png" : "assets/tetiana_avatar.png";
                logo.style.opacity = "1";
                isOriginal = !isOriginal;
            }, 400);
        }, 5000);
    }, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.experience-card');
    const isMobile = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    cards.forEach(card => {
        if (!isMobile) {
            card.addEventListener('mouseenter', function() {
                this.classList.add('is-flipped');
            });
            card.addEventListener('mouseleave', function() {
                this.classList.remove('is-flipped');
            });
        } else {
            card.addEventListener('click', function() {
                this.classList.toggle('is-flipped');
            });
        }
    });

    setTimeout(() => {
        setInterval(() => {
            cards.forEach(card => {
                card.classList.toggle('is-flipped');
            });
        }, 5000);
    }, 5000);
});