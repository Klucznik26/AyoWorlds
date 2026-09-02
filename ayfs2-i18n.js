const ayfs2Translations = {
    pl: {
        title: 'AYFS2 — AyoOS',
        description: 'AYFS2 — autorski system plików AyoOS z wersjonowaniem, rodzinami plików, snapshotami i semantyką wykraczającą poza klasyczne przechowywanie danych.',
        navAria: 'Nawigacja AYFS2',
        languageAria: 'Wybór języka',
        back: '← Powrót do AyoOS',
        kicker: 'NATYWNY SYSTEM PLIKÓW AYOOS',
        heroLead: 'AYFS2 powstaje z założenia, że system plików może rozumieć więcej niż tylko nazwę, katalog i ciąg bajtów. Ma przechowywać także relacje, historię i znaczenie danych.',
        heroNote: 'Projekt jest aktywnie rozwijany jako natywny system plików AyoOS.',
        ideaKicker: 'POMYSŁ',
        ideaTitle: 'Plik nie zawsze jest pojedynczym plikiem',
        ideaText: 'W klasycznym systemie plików podgląd, miniatura, metadane czy dokument źródłowy są zwykle niezależnymi obiektami. AYFS2 może traktować je jako jedną rodzinę i zachowywać tę relację podczas kopiowania, przenoszenia, usuwania lub eksportu.',
        featuresAria: 'Najważniejsze cechy AYFS2',
        familiesTag: 'RODZINY PLIKÓW',
        familiesTitle: 'Powiązane dane jako jeden logiczny obiekt',
        familiesText: 'Rodzina może zawierać plik główny oraz elementy pełniące role MAIN, PREVIEW, META i ATTACHMENT. System może znaleźć wszystkich członków rodziny, przenieść ją razem, pokazać jako całość i ostrzec, gdy eksport poza AYFS2 zgubi część tej semantyki.',
        versionsTag: 'HISTORIA',
        versionsTitle: 'Wersjonowanie plików',
        versionsText: 'AYFS2 może przechowywać do trzech wersji pliku i pozwalać na przywrócenie wcześniejszego stanu. Wersjonowanie jest elementem systemu plików, a nie osobną aplikacją kopiującą dokumenty do ukrytego katalogu.',
        trashTag: 'BEZPIECZNE USUWANIE',
        trashTitle: 'Kosz świadomy semantyki',
        trashText: 'Usunięcie może prowadzić do kosza zamiast natychmiastowego zniszczenia danych. Przywracanie i trwałe czyszczenie są częścią modelu AYFS2, a mechanizmy integralności uwzględniają także obiekty znajdujące się w koszu.',
        snapshotsTag: 'STANY SYSTEMU',
        snapshotsTitle: 'Snapshoty i klonowanie',
        snapshotsText: 'AYFS2 rozwija natywne snapshoty oraz mechanizmy klonowania, dzięki którym można zachować stan danych i pracować na nim bez sprowadzania całej funkcji do ręcznego kopiowania katalogów.',
        viewsTag: 'WIDOKI',
        viewsTitle: 'Dane można oglądać inaczej niż przez katalogi',
        viewsText: 'Widoki AYFS2 pozwalają budować logiczne sposoby prezentowania danych bez zmiany ich fizycznego położenia. Mogą być listowane, odczytywane i eksportowane przez API systemu.',
        metadataTag: 'METADANE I INTEGRALNOŚĆ',
        metadataTitle: 'System zna strukturę, którą ma chronić',
        metadataText: 'Rozbudowane metadane, indeksy i informacje o relacjach są częścią formatu. AYFS2 rozwija mechanizmy Verify, Scrub i FSCK, które sprawdzają nie tylko surowe bloki, ale również spójność struktur i semantyki systemu plików.',
        exportTag: 'ŚWIADOMY EKSPORT',
        exportTitle: 'Nie udaje, że każdy system plików potrafi to samo',
        exportText: 'Gdy dane trafiają na prostszy system plików, część informacji AYFS2 może nie mieć odpowiednika. Dlatego projekt zakłada ostrzeganie o możliwej utracie wersji, relacji rodzinnych, widoków lub metadanych zamiast cichego porzucania tych informacji.',
        interopTag: 'INTEGRACJA',
        interopTitle: 'POSIX, FUSE i Daraja',
        interopText: 'AYFS2 posiada warstwę POSIX, a odczyt przez FUSE umożliwia testowanie danych poza natywnym środowiskiem AyoOS. Funkcje systemu plików są również udostępniane aplikacjom przez Daraja.',
        goalTag: 'CEL',
        goalTitle: 'System plików jako część doświadczenia AyoOS',
        goalText: 'Celem AYFS2 nie jest wyłącznie przechowywanie plików. Ma dostarczać AyoOS funkcje, których aplikacje mogą używać bez budowania osobnych, niekompatybilnych baz danych i własnych mechanizmów historii czy relacji.',
        closingKicker: 'AYOOS-SPECIFIC',
        closingTitle: 'Semantyka jest częścią systemu plików',
        closingText: 'To właśnie ten kierunek — rodziny, wersje, widoki, snapshoty i integralność świadoma tych funkcji — ma odróżniać AYFS2 od klasycznego modelu „plik + katalog”.',
        bottomBack: '← Wróć do AyoOS'
    },
    en: {
        title: 'AYFS2 — AyoOS',
        description: 'AYFS2 — AyoOS’s custom file system with versioning, file families, snapshots and semantics that go beyond traditional data storage.',
        navAria: 'AYFS2 navigation',
        languageAria: 'Language selection',
        back: '← Back to AyoOS',
        kicker: 'NATIVE AYOOS FILE SYSTEM',
        heroLead: 'AYFS2 is built on the idea that a file system can understand more than a name, a directory and a sequence of bytes. It can also preserve relationships, history and the meaning of data.',
        heroNote: 'The project is under active development as the native file system of AyoOS.',
        ideaKicker: 'THE IDEA',
        ideaTitle: 'A file is not always a single file',
        ideaText: 'In a traditional file system, a preview, thumbnail, metadata or source document are usually independent objects. AYFS2 can treat them as one family and preserve that relationship during copy, move, deletion or export.',
        featuresAria: 'Key AYFS2 features',
        familiesTag: 'FILE FAMILIES',
        familiesTitle: 'Related data as one logical object',
        familiesText: 'A family can contain a main file and members with MAIN, PREVIEW, META and ATTACHMENT roles. The system can find all family members, move them together, present them as a whole and warn when exporting outside AYFS2 would lose part of that semantics.',
        versionsTag: 'HISTORY',
        versionsTitle: 'File versioning',
        versionsText: 'AYFS2 can keep up to three versions of a file and restore an earlier state. Versioning is part of the file system itself rather than a separate application copying documents into a hidden directory.',
        trashTag: 'SAFE DELETION',
        trashTitle: 'A semantics-aware recycle bin',
        trashText: 'Deletion can move data to the recycle bin instead of destroying it immediately. Restore and permanent purge are part of the AYFS2 model, and integrity mechanisms also account for objects that remain in the bin.',
        snapshotsTag: 'SYSTEM STATES',
        snapshotsTitle: 'Snapshots and cloning',
        snapshotsText: 'AYFS2 is developing native snapshots and cloning mechanisms that preserve a data state without reducing the whole feature to manually copying directories.',
        viewsTag: 'VIEWS',
        viewsTitle: 'Data can be presented in more ways than directories',
        viewsText: 'AYFS2 views provide logical ways to present data without changing its physical location. They can be listed, read and exported through the system API.',
        metadataTag: 'METADATA AND INTEGRITY',
        metadataTitle: 'The system understands the structure it protects',
        metadataText: 'Rich metadata, indexes and relationship information are part of the format. AYFS2 is developing Verify, Scrub and FSCK mechanisms that check not only raw blocks but also the consistency of file-system structures and semantics.',
        exportTag: 'SEMANTICS-AWARE EXPORT',
        exportTitle: 'It does not pretend every file system can express the same things',
        exportText: 'When data is exported to a simpler file system, some AYFS2 information may have no equivalent. The design therefore warns about possible loss of versions, family relationships, views or metadata instead of silently discarding them.',
        interopTag: 'INTEGRATION',
        interopTitle: 'POSIX, FUSE and Daraja',
        interopText: 'AYFS2 has a POSIX layer, while FUSE read access makes it possible to inspect and test data outside the native AyoOS environment. File-system capabilities are also exposed to applications through Daraja.',
        goalTag: 'GOAL',
        goalTitle: 'The file system as part of the AyoOS experience',
        goalText: 'AYFS2 is not intended only to store files. It is meant to provide capabilities that AyoOS applications can use without building separate incompatible databases and their own history or relationship mechanisms.',
        closingKicker: 'AYOOS-SPECIFIC',
        closingTitle: 'Semantics are part of the file system',
        closingText: 'This direction — families, versions, views, snapshots and integrity that understands those features — is what is intended to distinguish AYFS2 from the traditional “file + directory” model.',
        bottomBack: '← Back to AyoOS'
    }
};

function setAYFS2Language(lang) {
    const selected = lang === 'en' ? 'en' : 'pl';
    const dictionary = ayfs2Translations[selected];

    document.documentElement.lang = selected;
    document.title = dictionary.title;

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
    button.addEventListener('click', () => setAYFS2Language(button.dataset.lang));
});

let savedLanguage = 'pl';
try {
    savedLanguage = localStorage.getItem('ayoWorldsLanguage') || 'pl';
} catch (_) {}

setAYFS2Language(savedLanguage);
