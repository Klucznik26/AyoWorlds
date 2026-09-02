const screenshotsTranslations = {
    pl: {
        pageTitle: 'Zrzuty ekranu — AyoOS',
        description: 'Zrzuty ekranu AyoOS — zobacz rozwijany system w działaniu.',
        navAria: 'Nawigacja galerii AyoOS',
        languageAria: 'Wybór języka',
        back: '← Powrót do AyoOS',
        kicker: 'AYOOS W DZIAŁANIU',
        title: 'Zrzuty ekranu',
        lead: 'Galeria pokazuje rzeczywisty stan rozwijanego AyoOS. Kolejne obrazy będą dodawane wraz z rozwojem systemu.',
        galleryAria: 'Galeria zrzutów ekranu AyoOS',
        screen0Title: 'Pierwszy publiczny zrzut',
        screen0Caption: 'Pierwszy publiczny zrzut ekranu z rozwijanej wersji AyoOS.',
        screen0Alt: 'Pierwszy publiczny zrzut ekranu AyoOS',
        screen0Open: 'Powiększ pierwszy zrzut ekranu AyoOS',
        screen1Title: 'Okno „Dyski”',
        screen1Caption: 'Widok okna „Dyski” w rozwijanej wersji AyoOS.',
        screen1Alt: 'Okno Dyski w AyoOS',
        screen1Open: 'Powiększ zrzut okna Dyski w AyoOS',
        lightboxAria: 'Powiększony zrzut ekranu',
        closeAria: 'Zamknij podgląd'
    },
    en: {
        pageTitle: 'Screenshots — AyoOS',
        description: 'AyoOS screenshots — see the developing operating system in action.',
        navAria: 'AyoOS gallery navigation',
        languageAria: 'Language selection',
        back: '← Back to AyoOS',
        kicker: 'AYOOS IN ACTION',
        title: 'Screenshots',
        lead: 'This gallery shows the real state of the developing AyoOS. More images will be added as the system evolves.',
        galleryAria: 'AyoOS screenshots gallery',
        screen0Title: 'First public screenshot',
        screen0Caption: 'The first public screenshot from the developing version of AyoOS.',
        screen0Alt: 'First public screenshot of AyoOS',
        screen0Open: 'Enlarge the first AyoOS screenshot',
        screen1Title: '“Disks” window',
        screen1Caption: 'A view of the “Disks” window in the developing version of AyoOS.',
        screen1Alt: 'Disks window in AyoOS',
        screen1Open: 'Enlarge the AyoOS Disks window screenshot',
        lightboxAria: 'Enlarged screenshot',
        closeAria: 'Close preview'
    }
};

let currentLanguage = 'pl';

function setScreenshotsLanguage(lang) {
    currentLanguage = lang === 'en' ? 'en' : 'pl';
    const dictionary = screenshotsTranslations[currentLanguage];

    document.documentElement.lang = currentLanguage;
    document.title = dictionary.pageTitle;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', dictionary.description);

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (dictionary[key]) element.textContent = dictionary[key];
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
        const key = element.dataset.i18nAria;
        if (dictionary[key]) element.setAttribute('aria-label', dictionary[key]);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.dataset.i18nAlt;
        if (dictionary[key]) element.setAttribute('alt', dictionary[key]);
    });

    document.querySelectorAll('.language-button').forEach(button => {
        const active = button.dataset.lang === currentLanguage;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
    });

    try {
        localStorage.setItem('ayoWorldsLanguage', currentLanguage);
    } catch (_) {}
}

document.querySelectorAll('.language-button').forEach(button => {
    button.addEventListener('click', () => setScreenshotsLanguage(button.dataset.lang));
});

let savedLanguage = 'pl';
try {
    savedLanguage = localStorage.getItem('ayoWorldsLanguage') || 'pl';
} catch (_) {}
setScreenshotsLanguage(savedLanguage);

const lightbox = document.querySelector('.screen-lightbox');
const lightboxImage = document.querySelector('.screen-lightbox-image');
const closeButton = document.querySelector('.screen-lightbox-close');
let lastFocused = null;

function openLightbox(button) {
    lastFocused = document.activeElement;
    lightboxImage.src = button.dataset.screenImage;
    const altKey = button.dataset.altKey;
    lightboxImage.alt = screenshotsTranslations[currentLanguage][altKey] || '';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    closeButton.focus();
}

function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.removeAttribute('src');
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
}

document.querySelectorAll('.screen-image-button').forEach(button => {
    button.addEventListener('click', () => openLightbox(button));
});

closeButton.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', event => {
    if (event.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
});
