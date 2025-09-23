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
    setTimeout(() => {
        navLinks.classList.toggle('no-transition', !isOpen);
        navBtns.classList.toggle('no-transition', !isOpen);
    }, 500);
    if (isTablet) {
        navBtns.toggleAttribute('inert', isOpen);
    }
}

if (ready) {
    hamOpen.addEventListener('click', () => toggleMenu(true));
    hamClose.addEventListener('click', () => toggleMenu(false));
}

//Throttles handleScroll Function call
const throttle = (fn, delay) => {
    let inThrottle = false,
        lastFn,
        lastTime;
    return function () {
        if (!inThrottle) {
            fn.apply(this, arguments);
            lastTime = Date.now();
            inThrottle = true;
        } else {
            clearTimeout(lastFn);
            lastFn = setTimeout(
                function () {
                    if (Date.now() - lastTime >= delay) {
                        fn.apply(this, arguments);
                        lastTime = Date.now();
                    }
                },
                delay - (Date.now() - lastTime),
            );
        }
    };
};

// Adds box shadow on scroll
const handleScroll = () => {
    if (window.scrollY > 0) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
};

// Add the throttled function to the scroll event listener
window.addEventListener('scroll', throttle(handleScroll, 250));
