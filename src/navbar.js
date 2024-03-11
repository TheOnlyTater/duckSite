import './handlers/cartHandler';
import { getItemCount, getItemTotal, getTotalItems } from './handlers/cartHandler';

const navbar_bag = document.getElementById('bag-item-counter')
const burger_menu = document.getElementById('burger-menu')
const burger_menu_nav = document.getElementById('burger-menu-nav')

window.addEventListener('storage', () => {
    if (getTotalItems() > 0) {
        navbar_bag.classList.remove('hidden')
        navbar_bag.textContent = getTotalItems();
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
