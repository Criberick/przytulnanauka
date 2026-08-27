/* ==========================================================================
   Przytulna Nauka - Main JavaScript Script (script.js)
   ========================================================================== */

// Embedded fallback translations (w razie problemów z CORS / fetch lokalnie)
const fallbackTranslations = {
  pl: {
    "nav-home": "Główna",
    "nav-education": "Wykształcenie",
    "nav-services": "Usługi",
    "nav-experience": "Doświadczenie",
    "nav-contact": "Kontakt",
    "home-intro": "Cześć, jestem <span>Tetiana</span>",
    "home-introSubtitle": "Prowadzę <span>Korepetycje</span>",
    "home-introText": "Zapraszam wszystkich, którzy chcą nauczyć się języka polskiego!<br>Zyskaj pewność siebie w codziennej komunikacji – w pracy, w szkole lub podczas wizyty u znajomych w Polsce.",
    "btn-check": "Sprawdź oferty",
    "btn-call": "Kontakt",
    "edu-title": "Wykształcenie",
    "edu-timeline-1": "Uniwersytet Komisji Edukacji Narodowej w Krakowie",
    "edu-p-1": "Uzyskałam certyfikat potwierdzający udział w zajęciach projektowania interfejsów stron internetowych i aplikacji.",
    "edu-timeline-2": "Żytomierski Uniwersytet im. Iwana Franko",
    "edu-p-2": "Uzyskałam stopień magistra (Mgr) z Pedagogiki wczesnoszkolnej.",
    "edu-timeline-3": "Żytomierski Uniwersytet im. Iwana Franko",
    "edu-p-3": "Uzyskałam stopień licencjata z Pedagogiki wczesnoszkolnej.",
    "service-title": "Usługi",
    "service-box-title-1": "Korepetycje",
    "service-box-content-1": "W ramach korepetycji mogę powtórzyć temat, z którym masz problem lub zrobić lekcję z nowego zakresu wiedzy.",
    "service-box-title-2": "Zajęcia grupowe",
    "service-box-content-2": "Wspólnie ćwiczymy konwersacje, rozwiązujemy zadania i uczymy się od siebie nawzajem.",
    "service-box-title-3": "Rozmówki po polsku",
    "service-box-content-3": "Skupiamy się na praktycznych dialogach, które pomogą Ci w codziennych sytuacjach.",
    "service-box-title-4": "Lekcje indywidualne",
    "service-box-content-4": "Zajęcia indywidualne koncentrują się na konkretnych aspektach języka, takich jak gramatyka, wymowa, pisanie, albo czytanie.",
    "experience-title": "Doświadczenie",
    "exp-card-front-1": "Korepetytor",
    "exp-card-front-p-1": "Od 2022 roku prowadzę indywidualne oraz grupowe korepetycje z języka polskiego.",
    "exp-card-front-2": "Współpraca z PCK",
    "exp-card-front-p-2": "Prowadzę kluby konwersacyjne dla pracowników Polskiego Czerwonego Krzyża i uchodźców z Ukrainy.",
    "exp-card-front-3": "Nauczycielka w szkołach",
    "exp-card-front-p-3": "Doświadczenie w prywatnych szkołach językowych, przygotowujące uczniów do profesjonalnego posługiwania się językiem.",
    "contact-title": "Kontakt"
  },
  ua: {
    "nav-home": "Головна",
    "nav-education": "Освіта",
    "nav-services": "Послуги",
    "nav-experience": "Досвід",
    "nav-contact": "Контакт",
    "home-intro": "Привіт, я <span>Тетяна</span>",
    "home-introSubtitle": "Я проводжу <span>Заняття</span>",
    "home-introText": "Запрошую всіх бажаючих вивчати польську!<br> Здобудьте впевненість у щоденному спілкуванні – на роботі, у школі чи в гостях у друзів у Польщі.",
    "btn-check": "Перевірити",
    "btn-call": "Зв'язок",
    "edu-title": "Освіта",
    "edu-timeline-1": "Uniwersytet Komisji Edukacji Narodowej w Krakowie",
    "edu-p-1": "Я отримаła сертифікат, що підтверджує участь у заняттях з проектування веб-сайтів i інтерфейсів.",
    "edu-timeline-2": "Житомирський університет імені Івана Франка",
    "edu-p-2": "Я отримала ступінь магістра з педагогіки початкової школи.",
    "edu-timeline-3": "Житомирський університет імені Івана Франка",
    "edu-p-3": "Я отримала ступінь бакалавра з педагогіки початкової школи.",
    "service-title": "Послуги",
    "service-box-title-1": "Приватні заняття",
    "service-box-content-1": "В рамках репетиторства я можу повторити тему, з якою у вас виникають труднощі.",
    "service-box-title-2": "Групові заняття",
    "service-box-content-2": "Разом ми практикуємо бесіди, вирішуємо завдання та вчимося один у одного.",
    "service-box-title-3": "Польський розмовник",
    "service-box-content-3": "Ми зосереджені на практичних діалогах, які допоможуть вам у повсякденних ситуаціях.",
    "service-box-title-4": "Індивідуальні заняття",
    "service-box-content-4": "Індивідуальні заняття зосереджені на конкретних аспектах мови.",
    "experience-title": "Досвід",
    "exp-card-front-1": "Репетитор",
    "exp-card-front-p-1": "Працюю репетитором польської мови з 2022 року.",
    "exp-card-front-2": "Співпраця з PCK",
    "exp-card-front-p-2": "Веду розмовні клуби для працівників Польського Червоного Хреста та біженців з України.",
    "exp-card-front-3": "Викладач мовних шкіл",
    "exp-card-front-p-3": "Я працювала в приватних мовних школах, проводила заняття для студентів.",
    "contact-title": "Контакт"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize AOS safely
  try {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        offset: 50
      });
    }
  } catch (e) {
    console.warn("AOS init failed:", e);
  }

  // 2. Mobile Menu Toggle
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
      navbar.classList.toggle("active");
      const icon = menuIcon.querySelector("i");
      if (icon) {
        icon.classList.toggle("bx-menu-alt-right");
        icon.classList.toggle("bx-x");
      }
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbar.classList.remove("active");
        const icon = menuIcon.querySelector("i");
        if (icon) {
          icon.classList.add("bx-menu-alt-right");
          icon.classList.remove("bx-x");
        }
      });
    });
  }

  // 3. Active Nav Link on Scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");
      const navLink = document.querySelector(`.navbar a[href*="${sectionId}"]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      }
    });
  });

  // 4. Dark / Light Theme Toggle
  const themeToggleBtn = document.getElementById("theme-toggle");
  
  if (themeToggleBtn) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light-mode");
      const icon = themeToggleBtn.querySelector("i");
      if (icon) icon.className = "bx bx-moon";
    }

    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      const isLight = document.body.classList.contains("light-mode");
      const icon = themeToggleBtn.querySelector("i");
      
      if (icon) {
        icon.className = isLight ? "bx bx-moon" : "bx bx-sun";
      }
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  }

  // 5. Language Switcher (PL / UA)
  let currentLanguage = localStorage.getItem("language") || "pl";
  const languageToggleBtn = document.getElementById("language-toggle");

  function updateDOMTranslations(translations) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-translate");
      if (translations[key]) {
        el.innerHTML = translations[key];
      }
    });
  }

function loadTranslations(lang) {
    // Ścieżka ../languages/ wychodzi z katalogu scripts do folderu languages
    fetch(`../languages/${lang}.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then((data) => {
        updateDOMTranslations(data);
      })
      .catch(() => {
        // W razie braku dostępu do plików JSON używamy wbudowanych tłumaczeń
        if (fallbackTranslations[lang]) {
          updateDOMTranslations(fallbackTranslations[lang]);
        }
      })
      .finally(() => {
        currentLanguage = lang;
        localStorage.setItem("language", lang);
        if (languageToggleBtn) {
          languageToggleBtn.textContent = lang === "pl" ? "Polski" : "Українська";
        }
      });
  }

  if (languageToggleBtn) {
    languageToggleBtn.addEventListener("click", () => {
      const nextLang = currentLanguage === "pl" ? "ua" : "pl";
      loadTranslations(nextLang);
    });
  }

  // Initial load
  loadTranslations(currentLanguage);

  // 6. Interactive Avatar Swap
  const logo = document.getElementById("logo-img");
  if (logo) {
    let isOriginal = true;
    const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const toggleAvatar = () => {
      logo.style.opacity = "0";
      setTimeout(() => {
        logo.src = isOriginal ? "assets/domain_logo.png" : "assets/tetiana_avatar.png";
        logo.style.opacity = "1";
        isOriginal = !isOriginal;
      }, 300);
    };

    logo.style.transition = "opacity 0.3s ease";
    if (!isMobile) {
      logo.addEventListener("mouseenter", toggleAvatar);
      logo.addEventListener("mouseleave", toggleAvatar);
    } else {
      logo.addEventListener("click", toggleAvatar);
    }
  }
});

// Dynamiczny efekt 3D Tilt na kartach
  const cards = document.querySelectorAll(".glass-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    });
  });