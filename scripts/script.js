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


// Get buttons
const toggleButton = document.getElementById("theme-toggle");
const iconElement = toggleButton.querySelector("i")

// Icon change function
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

// Default start icon
updateButtonIcon();

document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("logo");
    let isOriginal = true;

    function toggleLogo() {
        logo.style.opacity = "0";
        setTimeout(() => {
            if (isOriginal) {
                logo.src = "assets/domain_logo.png";
            } else {
                logo.src = "assets/tetiana_avatar.png";
            }
            logo.style.opacity = "1";
            isOriginal = !isOriginal;
        }, 400);
    }

    // hover (desktop)
    logo.addEventListener("mouseenter", function () {
        logo.style.opacity = "0";
        setTimeout(() => {
            logo.src = "assets/domain_logo.png";
            logo.style.opacity = "1";
        }, 400);
    });
    logo.addEventListener("mouseleave", function () {
        logo.style.opacity = "0";
        setTimeout(() => {
            logo.src = "assets/tetiana_avatar.png";
            logo.style.opacity = "1";
        }, 400);
    });

    // click and hover (mobile and desktop)
    logo.addEventListener("click", toggleLogo);
    logo.addEventListener("touchstart", toggleLogo);
});

// expeirience card flip

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.experience-card');
  
    cards.forEach(card => {
      card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
      });
    });
  });
  