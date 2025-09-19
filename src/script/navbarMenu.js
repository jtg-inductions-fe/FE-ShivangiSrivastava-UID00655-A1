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
const navLogo = document.querySelector('#nav-logo');

const isTablet = window.innerWidth >= 1024 && window.innerWidth < 1440;

//Open/Close Navigation Sidebar
function toggleMenu(isOpen) {
    if (!ready) {
        return;
    }
    navLinks.classList.toggle('active', isOpen);
    navMenu.setAttribute('aria-expanded', isOpen);
    hamOpen.classList.toggle('closed', isOpen);
    hamClose.classList.toggle('active', isOpen);
    document.body.classList.toggle('no-scroll', isOpen);
    mainSection.toggleAttribute('inert', isOpen);
    footerSection.toggleAttribute('inert', isOpen);
    navBtns.classList.toggle('active', isOpen);

    if (isTablet) {
        navBtns.toggleAttribute('inert', isOpen);
    }
}

function reorderForTab() {
    if (isTablet) {
        navBar.insertBefore(navMenu, navLogo);
    } else {
        navBar.insertBefore(navLogo, navMenu);
    }
}

window.addEventListener('resize', reorderForTab());

if (ready) {
    hamOpen.addEventListener('click', () => toggleMenu(true));
    hamClose.addEventListener('click', () => toggleMenu(false));
}
