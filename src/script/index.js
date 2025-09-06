const hamOpen = document.querySelector('#menu-open');
const hamClose = document.querySelector('#menu-close');
const navLinks = document.querySelector('.navbar__links');
const navBtns = document.querySelector('.navbar__btns');

function toggleMenu(isOpen) {
    navLinks.classList.toggle('active', isOpen);
    navBtns.classList.toggle('active', isOpen);
    hamOpen.style.display = isOpen ? 'none' : 'block';
    hamClose.style.display = isOpen ? 'block' : 'none';
}

hamOpen.addEventListener('click', () => toggleMenu(true));
hamClose.addEventListener('click', () => toggleMenu(false));
