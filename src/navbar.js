import './handlers/cartHandler';
import { getItemCount, getItemTotal, getTotalItems } from './handlers/cartHandler';

const navbar = document.getElementById('navbar-element');
const navbar_bag = document.getElementById('bag-item-counter')
const navbar_waves = document.getElementById('navbar-waves');
let prevY = 0;


document.addEventListener('DOMContentLoaded', () => {
    if (getTotalItems() > 0) {
        navbar_bag.textContent = getTotalItems();
    } else {
        navbar_bag.classList.add('hidden');
    }
});

document.addEventListener('scroll', (e) => {
    const currY = window.scrollY;
    if (currY > prevY)  {
        navbar.classList.add('hide-navbar')
        navbar_waves.classList.remove('hidden');
    }
    else {
        navbar.classList.remove('hide-navbar');
        navbar_waves.classList.add('hidden')
    }

    prevY = currY
});

window.addEventListener('storage', () => {
    if (getTotalItems() > 0) {
        navbar_bag.classList.remove('hidden')
        navbar_bag.textContent = getTotalItems();
    } else {
        navbar_bag.classList.add('hidden')
    }
})

// reste navbar to presets
window.addEventListener('load', () => {
    navbar.classList.remove('hide-navbar');
    navbar_waves.classList.add('hidden')
});