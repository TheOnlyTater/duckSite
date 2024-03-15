import { getTotalProductQuantity } from './handlers/betterhandler';

const navbar_bag = document.getElementById('bag-item-counter')
const burger_menu = document.getElementById('burger-menu')
const burger_menu_nav = document.getElementById('burger-menu-nav')

const travel_duck = document.getElementById('traveling-duck');

window.addEventListener('storage', () => {
    const quant = getTotalProductQuantity();
    if (quant > 0) {
        navbar_bag.classList.remove('hidden')
        navbar_bag.textContent = quant;
    } else {
        navbar_bag.classList.add('hidden')
    }
})


window.addEventListener('DOMContentLoaded', () => {
    const quant = getTotalProductQuantity();

    if (Number(quant) > 0) {
        navbar_bag.classList.remove('hidden')
        navbar_bag.textContent = quant;
    } else {
        navbar_bag.classList.add('hidden')
    }
})


burger_menu.addEventListener('click', () => {
    const entire_burger_menu = document.getElementsByClassName('burger-menu')[0];
    if (!entire_burger_menu.classList.contains('burger-in-focus'))
    {
        entire_burger_menu.classList.add('burger-in-focus', 'burger-icon-active');
        burger_menu_nav.style.display = "block";
        document.querySelector('body').style.overflowY = "hidden";
    } else  {
        entire_burger_menu.classList.remove('burger-in-focus', 'burger-icon-active')
        burger_menu_nav.style.display = "none";
        document.querySelector('body').style.overflowY = "scroll";
    }

});

// DUCK NAVBAR ANIMATION
const get_duck_angle = (x) => {
    return Math.asin((Math.cos(x) * Math.cos(x)) / (Math.cos(x) * Math.cos(x) + 1));
}

const get_current_window_x = () => {
    return (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        const duckPos = Math.PI * 2 * get_current_window_x();
        travel_duck.style.left = `${duckPos* 2}px`
        travel_duck.style.top = `${Math.sin(duckPos) * 7}px`
        travel_duck.style.rotate = `${get_duck_angle(duckPos) * 100}deg`
    }, 200)
})