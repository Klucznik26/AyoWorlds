const ayoosTranslations = {
    pl: {
        title: 'AyoOS',
        description: 'AyoOS — świat systemu operacyjnego Ayo.',
        navAria: 'Nawigacja AyoOS',
        languageAria: 'Wybór języka',
        back: '← Powrót do portali',
        screenshotKicker: 'SYSTEM W DZIAŁANIU',
        screenshotTitle: 'AyoOS — pierwszy zrzut ekranu',
        screenshotAlt: 'Pierwszy zrzut ekranu systemu AyoOS',
        screenshotCaption: 'Pierwszy publiczny zrzut ekranu z rozwijanej wersji AyoOS.',
        galleryLink: 'Zobacz wszystkie zrzuty →',
        identityKicker: 'WŁASNA DROGA',
        identityTitle: 'Co wyróżnia AyoOS?',
        identityLead: 'AyoOS nie jest tylko własnym pulpitem nałożonym na gotowy system. Jego kluczowe elementy — system plików, warstwa graficzna, języki, API i warstwy kompatybilności — są projektowane jako część jednego, spójnego ekosystemu.',
        ayfsTag: 'SYSTEM PLIKÓW',
        ayfsText: 'Natywny system plików AyoOS rozwijany nie tylko jako miejsce przechowywania danych. AYFS2 obsługuje m.in. wersjonowanie plików, rodziny powiązanych plików, kosz, snapshoty, widoki oraz rozbudowane metadane i mechanizmy integralności.',
        ayfsLink: 'Poznaj AYFS2 →',
        fsTag: 'KOMPATYBILNOŚĆ',
        fsTitle: 'Wiele systemów plików',
        fsText: 'AyoOS rozwija własną warstwę VFS i sterowniki dla wielu formatów — od AYFS1 i AYFS2, przez FAT12/16/32, exFAT, BFS i Amiga FFS/OFS, po XFS, ext2 oraz kolejne systemy. Zakres obsługi rośnie wraz z rozwojem projektu.',
        nyotaTag: 'JĘZYK SYSTEMOWY',
        nyotaText: 'Własny język rozwijany z myślą o AyoOS i kodzie bliskim systemowi. Nyota ma być naturalnym narzędziem do tworzenia elementów systemu bez uzależniania całego projektu od jednego zewnętrznego języka.',
        basicTag: 'PROGRAMOWANIE',
        basicText: 'Własny język z rodziny BASIC przeznaczony dla ekosystemu AyoOS. Ma zapewnić prostą, czytelną drogę do tworzenia programów i eksperymentowania z systemem bez konieczności zaczynania od niskopoziomowego kodu.',
        darajaTag: 'API I JĘZYKI',
        darajaText: 'Warstwa łącząca aplikacje z usługami AyoOS. Daraja udostępnia spójne API i most C ABI, dzięki któremu funkcje systemowe mogą być wykorzystywane z różnych języków, m.in. C, Zig, Python, Ruby, Lua i Free Pascal.',
        guiTag: 'GRAFIKA I INTERFEJS',
        guiText: 'Nexa odpowiada za własny protokół powierzchni, kompozycję i obsługę okien, a Sayari buduje na nim interfejs użytkownika AyoOS. Dzięki temu wygląd i zachowanie środowiska graficznego nie są kopią gotowego desktopu, lecz częścią architektury systemu.',
        retroTag: 'RETROKOMPATYBILNOŚĆ',
        retroTitle: 'Atari 8-bit i kolejne platformy retro',
        retroText: 'AyoOS rozwija możliwość uruchamiania oprogramowania i gier z komputerów Atari 8-bit. To nie ma być pojedynczy eksperyment, lecz początek szerszej warstwy retrokompatybilności — w planach jest stopniowe rozszerzanie jej o kolejne klasyczne komputery i platformy.'
    },
    en: {
        title: 'AyoOS',
        description: 'AyoOS — the world of the Ayo operating system.',
        navAria: 'AyoOS navigation',
        languageAria: 'Language selection',
        back: '← Back to portals',
        screenshotKicker: 'THE SYSTEM IN ACTION',
        screenshotTitle: 'AyoOS — first screenshot',
        screenshotAlt: 'First screenshot of the AyoOS operating system',
        screenshotCaption: 'The first public screenshot from the developing version of AyoOS.',
        galleryLink: 'View all screenshots →',
        identityKicker: 'ITS OWN PATH',
        identityTitle: 'What makes AyoOS different?',
        identityLead: 'AyoOS is not just a custom desktop placed on top of an existing system. Its key components — the file system, graphics stack, languages, APIs and compatibility layers — are designed as parts of one coherent ecosystem.',
        ayfsTag: 'FILE SYSTEM',
        ayfsText: 'AyoOS’s native file system is being developed as more than a place to store data. AYFS2 includes file versioning, families of related files, a recycle bin, snapshots, views, rich metadata and integrity mechanisms.',
        ayfsLink: 'Explore AYFS2 →',
        fsTag: 'COMPATIBILITY',
        fsTitle: 'Many file systems',
        fsText: 'AyoOS is developing its own VFS layer and drivers for many formats — from AYFS1 and AYFS2 through FAT12/16/32, exFAT, BFS and Amiga FFS/OFS to XFS, ext2 and further file systems. The supported range grows as the project develops.',
        nyotaTag: 'SYSTEM LANGUAGE',
        nyotaText: 'A custom language being developed for AyoOS and system-level code. Nyota is intended to become a natural tool for building system components without making the entire project dependent on a single external language.',
        basicTag: 'PROGRAMMING',
        basicText: 'A custom BASIC-family language for the AyoOS ecosystem. It is intended to provide a simple and readable way to create programs and experiment with the system without having to start with low-level code.',
        darajaTag: 'API AND LANGUAGES',
        darajaText: 'A layer connecting applications with AyoOS services. Daraja provides a consistent API and a C ABI bridge, allowing system functions to be used from multiple languages including C, Zig, Python, Ruby, Lua and Free Pascal.',
        guiTag: 'GRAPHICS AND INTERFACE',
        guiText: 'Nexa provides AyoOS with its own surface protocol, composition and window handling, while Sayari builds the user interface on top of it. This makes the graphical environment part of the system architecture rather than a copy of an existing desktop.',
        retroTag: 'RETRO COMPATIBILITY',
        retroTitle: 'Atari 8-bit and more retro platforms',
        retroText: 'AyoOS is developing the ability to run software and games from Atari 8-bit computers. This is intended to be more than a one-off experiment: the plan is to gradually expand the retro-compatibility layer to additional classic computers and platforms.'
    }
};

function setAyoOSLanguage(lang) {
    const selected = lang === 'en' ? 'en' : 'pl';
    const dictionary = ayoosTranslations[selected];

    document.documentElement.lang = selected;
    document.title = dictionary.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
        description.setAttribute('content', dictionary.description);
    }

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

    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.dataset.i18nAlt;
        if (dictionary[key]) {
            element.setAttribute('alt', dictionary[key]);
        }
    });

    document.querySelectorAll('.language-button').forEach(button => {
        const active = button.dataset.lang === selected;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
    });

    try {
        localStorage.setItem('ayoWorldsLanguage', selected);
    } catch (_) {}
}

document.querySelectorAll('.language-button').forEach(button => {
    button.addEventListener('click', () => setAyoOSLanguage(button.dataset.lang));
});

let savedLanguage = 'pl';
try {
    savedLanguage = localStorage.getItem('ayoWorldsLanguage') || 'pl';
} catch (_) {}

setAyoOSLanguage(savedLanguage);
