import { getTotalProductQuantity } from './handlers/betterhandler';

const navbar = {
    navbarBag: document.getElementById('bag-item-counter') || null,
    burgerMenuIcon: document.getElementById('burger-menu') || null,
    burgerMenu: document.getElementById('burger-menu-nav') || null
}

// DEBUG
// checks if element failed to load
// comment out in prod
//document.addEventListener('DOMContentLoaded', () => {
//    if (Object.keys(navbar).filter((key) => navbar[key] == null).length > 0) {
//      console.error('FAILED TO LOAD NAVBAR!');
//    }
//})


// navbar initalization
document.addEventListener('DOMContentLoaded', () => {
    updateBackTotal(); // get bag total on page load
})

// NOTE: updates the new bag total each time storage is changed
window.addEventListener('storageUpdated', () => updateBackTotal())


// BURGER MENU SETUP
// hide current navbar navlinks and replace it with a burger menu
navbar.burgerMenuIcon.addEventListener('click', () => {
    const burgerMenuOverlay = document.getElementsByClassName('burger-menu')[0];

    if (!burgerMenuOverlay.classList.contains('burger-in-focus'))
    {
        burgerMenuOverlay.classList.add('burger-in-focus', 'burger-icon-active');
        navbar.burgerMenu.style.display = "block";
        document.querySelector('body').style.overflowY = "hidden";
    } else  {
        burgerMenuOverlay.classList.remove('burger-in-focus', 'burger-icon-active')
        navbar.burgerMenu.style.display = "none";
        document.querySelector('body').style.overflowY = "scroll";
    }
})


/* HELPER FUNCTIONS */
const updateBackTotal = () => {
    const quantity = getTotalProductQuantity();
    if (quantity) {
        navbar.navbarBag.classList.remove('hidden');
        navbar.navbarBag.innerHTML = quantity;
    } else {
        navbar.navbarBag.classList.add('hidden');
    }
}