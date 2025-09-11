const hamOpen = document.querySelector('#menu-open');
const hamClose = document.querySelector('#menu-close');
const navLinks = document.querySelector('#navbar-list');
const navBtns = document.querySelector('#nav-btns');
const navMenu = document.querySelector('#nav-menu');
const ready = hamOpen && hamClose && navLinks && navBtns && navMenu;

//Open/Close Navigation Sidebar
function toggleMenu(isOpen) {
    if (!ready) {
        return;
    }
    navLinks.classList.toggle('active', isOpen);
    navBtns.classList.toggle('active', isOpen);
    navMenu.setAttribute('aria-expanded', isOpen);
    hamOpen.style.display = isOpen ? 'none' : 'block';
    hamClose.classList.toggle('active', isOpen);
    document.body.classList.toggle('no-scroll', isOpen);
}

//Exit Navigation Sidebar with ESC
document.addEventListener('keydown', (e) => {
    if (
        e.key === 'Escape' &&
        navMenu?.getAttribute('aria-expanded') === 'true'
    ) {
        toggleMenu(false);
    }
});
if (ready) {
    hamOpen.addEventListener('click', () => toggleMenu(true));
    hamClose.addEventListener('click', () => toggleMenu(false));
}

//Open Navigation SideBar with Enter or Space
// hamOpen.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter' || e.key === ' ') {
//         e.preventDefault();
//         toggleMenu(true);
//     }
// });
