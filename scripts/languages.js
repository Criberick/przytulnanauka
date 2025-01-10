let currentLanguage = "pl";

function loadTranslations(lang) {
    fetch(`languages/${lang}.json`)
        .then((response) => {
            if (!response.ok) throw new Error(`Could not load ${lang} translations`);
            return response.json();
        })
        .then((translations) => {
            updateText(translations);
            currentLanguage = lang;
        })
        .catch((error) => console.error("Error loading translations:", error));
}

function updateText(translations) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach((el) => {
        const key = el.getAttribute("data-translate");
        el.innerHTML = translations[key] || el.innerHTML;
    });
}

// Obsługa przycisku zmiany języka
const languageToggle = document.getElementById("language-toggle");
languageToggle.addEventListener("click", () => {
    const newLang = currentLanguage === "pl" ? "ua" : "pl";
    languageToggle.textContent = newLang === "pl" ? "Polski" : "Українська";
    loadTranslations(newLang);
});

// Ustaw język domyślny na start
loadTranslations("pl");

