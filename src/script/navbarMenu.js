//Provides Navbar Open/Close functionality
const hamOpen = document.querySelector('#menu-open');
const hamClose = document.querySelector('#menu-close');
const navLinks = document.querySelector('#navbar-list');
const navBtns = document.querySelector('#nav-btns');
const navMenu = document.querySelector('#nav-menu');
const mainSection = document.querySelector('#main-section');
const footerSection = document.querySelector('#footer-section');
const navBar = document.querySelector('.navbar');
const ready = hamOpen && hamClose && navLinks && navBtns && navMenu;

/**
 * Toggles the visibility of navigation bar menu
 * @param {boolean} isOpen - indicates whether the menu should be open (true) or closed (false)
 */
function toggleMenu(isOpen) {
    if (!ready) {
        return;
    }
    navBar.classList.toggle('active', isOpen);
    navLinks.classList.toggle('active', isOpen);
    navMenu.setAttribute('aria-expanded', isOpen);
    hamOpen.classList.toggle('closed', isOpen);
    hamClose.classList.toggle('active', isOpen);
    document.body.classList.toggle('no-scroll', isOpen);
    mainSection.toggleAttribute('inert', isOpen);
    footerSection.toggleAttribute('inert', isOpen);
    navBtns.classList.toggle('active', isOpen);
    setTimeout(() => {
        navLinks.classList.toggle('no-transition', !isOpen);
        navBtns.classList.toggle('no-transition', !isOpen);
    }, 500);
}

if (ready) {
    hamOpen.addEventListener('click', () => toggleMenu(true));
    hamClose.addEventListener('click', () => toggleMenu(false));
}
