document.querySelectorAll('#dropdown').forEach((dropdown) => {
    const container = dropdown.closest('#container');
    const list = container.querySelector('#details-list');
    const icon = dropdown.querySelector('#dropdown-icon');
    dropdown.addEventListener('click', () => {
        const isOpen = !container.classList.contains('is-open');
        list.classList.toggle('active', isOpen);
        container.classList.toggle('is-open', isOpen);
        container.setAttribute('aria-expanded', isOpen);
        icon.classList.toggle('details__icon--expanded', isOpen);
    });
});
