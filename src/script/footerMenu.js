document.querySelectorAll('.details__dropdown').forEach((dropdown) => {
    const container = dropdown.closest('.details__container');
    const list = container.querySelector('.details__list');
    const icon = dropdown.querySelector('.details__icon');
    dropdown.addEventListener('click', () => {
        list.classList.toggle('active');
        container.classList.toggle('is-open');
        icon.classList.toggle('details__icon--expanded');
    });
});
