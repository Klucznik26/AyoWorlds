document.querySelectorAll('[data-coming-soon]').forEach(portal => {
    portal.addEventListener('click', event => {
        event.preventDefault();
    });
});
