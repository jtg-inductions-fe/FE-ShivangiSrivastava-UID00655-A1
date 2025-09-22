//Provides Navbar Open/Close functionality
const hamOpen = document.querySelector('#menu-open');
const hamClose = document.querySelector('#menu-close');
const navLinks = document.querySelector('#navbar-list');
const navBtns = document.querySelector('#nav-btns');
const navMenu = document.querySelector('#nav-menu');
const navContent = navLinks.parentElement;
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
    navBar.classList.toggle('active', isOpen);
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

if (ready) {
    hamOpen.addEventListener('click', () => toggleMenu(true));
    hamClose.addEventListener('click', () => toggleMenu(false));
}

//Reorder Tab for tablet view
function reorderForTab() {
    if (window.innerWidth >= 1024 && window.innerWidth < 1440) {
        navContent.insertBefore(navMenu, navLogo);
    } else {
        navContent.insertBefore(navLogo, navMenu);
    }
}

window.addEventListener('resize', reorderForTab);

//Add box shadow on scroll

window.addEventListener('scroll', () => {
    if (scrollY > 0) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
});
