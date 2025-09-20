document.querySelectorAll('.company-details__dropdown').forEach((dropdown) => {
    const container = dropdown.parentElement;
    const list = container.querySelector('.company-details__list');
    const icon = dropdown.querySelector('.company-details__icon');
    dropdown.addEventListener('click', () => {
        const isOpen = !container.classList.contains('is-open');
        list.classList.toggle('active', isOpen);
        container.classList.toggle('is-open', isOpen);
        container.setAttribute('aria-expanded', isOpen);
        icon.classList.toggle('company-details__icon--expanded', isOpen);
    });
});
