const hamOpen = document.querySelector('#menu-open');
const hamClose = document.querySelector('#menu-close');
const navLinks = document.querySelector('.navbar__links');
const navBtns = document.querySelector('.navbar__btns');
const navMenu = document.querySelector('#nav-menu');

//Open/Close Navigation Sidebar
function toggleMenu(isOpen) {
    navLinks.classList.toggle('active', isOpen);
    navBtns.classList.toggle('active', isOpen);
    navMenu.setAttribute('aria-expanded', isOpen);
    hamOpen.style.display = isOpen ? 'none' : 'block';
    hamClose.style.display = isOpen ? 'block' : 'none';
}

//Exit Navigation Sidebar with ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        toggleMenu(false);
    }
});

hamOpen.addEventListener('click', () => toggleMenu(true));
hamClose.addEventListener('click', () => toggleMenu(false));
