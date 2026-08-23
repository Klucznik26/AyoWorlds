const translations = {
    pl: {
        heroTitle: 'Trzy światy. Jedna brama.',
        lead: 'Wybierz portal i przejdź do jednego ze światów Ayo.',
        appsDescription: 'Aplikacje i narzędzia',
        osDescription: 'Autorski system operacyjny',
        cradlesDescription: 'Opowieść i osobny świat',
        enter: 'Wejdź',
        soon: 'Wkrótce',
        footerTagline: 'Oprogramowanie · System · Opowieści',
        navAria: 'Główna nawigacja',
        worldNavAria: 'Światy Ayo',
        languageAria: 'Wybór języka',
        worldsAria: 'Światy Ayo',
        appsAria: 'Otwórz AyoTools',
        osAria: 'AyoOS — w przygotowaniu',
        cradlesAria: 'Puste Kołyski — w przygotowaniu'
    },
    en: {
        heroTitle: 'Three worlds. One gateway.',
        lead: 'Choose a portal and enter one of the Ayo worlds.',
        appsDescription: 'Apps and tools',
        osDescription: 'An original operating system',
        cradlesDescription: 'A story and a world of its own',
        enter: 'Enter',
        soon: 'Coming soon',
        footerTagline: 'Software · System · Stories',
        navAria: 'Main navigation',
        worldNavAria: 'Ayo worlds',
        languageAria: 'Language selection',
        worldsAria: 'Ayo worlds',
        appsAria: 'Open AyoTools',
        osAria: 'AyoOS — coming soon',
        cradlesAria: 'Puste Kołyski — coming soon'
    }
};

function setLanguage(lang) {
    const dictionary = translations[lang] || translations.pl;

    document.documentElement.lang = lang;
    localStorage.setItem('ayoWorldsLanguage', lang);

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (dictionary[key]) {
            element.textContent = dictionary[key];
        }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
        const key = element.dataset.i18nAria;
        if (dictionary[key]) {
            element.setAttribute('aria-label', dictionary[key]);
        }
    });

    document.querySelectorAll('.language-button').forEach(button => {
        const active = button.dataset.lang === lang;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
    });
}

document.querySelectorAll('.language-button').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

document.querySelectorAll('[data-coming-soon]').forEach(portal => {
    portal.addEventListener('click', event => {
        event.preventDefault();
    });
});

const savedLanguage = localStorage.getItem('ayoWorldsLanguage');
setLanguage(savedLanguage === 'en' ? 'en' : 'pl');
