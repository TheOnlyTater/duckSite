import storeItems from '../storeItems.json';
import '../handlers/cartHandler';
import { decrementItemTotal, getItemCount, getItemTotal, getStorage, incrementItemTotal, incremetnItemTotal } from '../handlers/cartHandler';

const itemIDX = window.location.hash.substring(1).split('=')[1];
const addItemsCart = {
    add: document.getElementById('add-item'),
    remove: document.getElementById('remove-item'),
    count: document.getElementById('item-count'),

    multi: document.getElementById('add-multiple-items'),
    single: document.getElementById('add-first-item')
}

const template = {
    title: document.querySelector('.title-up'),
    name: document.querySelector('.product-name'),
    price: document.querySelector('.product-price'),
    description: document.querySelector('.product-description'),

    length: document.querySelector('.product-length'),
    width: document.querySelector('.product-width'),
    height: document.querySelector('.product-height'),
    weight: document.querySelector('.product-weight')
}

document.addEventListener('DOMContentLoaded', () => {
    const item = storeItems[itemIDX];
    template.title.textContent = item.category;
    template.name.textContent = item.name;
    template.price.textContent = "$" + item.price;
    template.description.textContent = item.description;
    
    template.length.textContent = item.length;
    template.width.textContent = item.width;
    template.height.textContent = item.height;
    template.weight.textContent = item.weight;

    // load correct inital button
    if (getItemCount(item.name) > 1)
    {
        addItemsCart.single.classList.add('hidden');
        addItemsCart.multi.classList.remove('hidden')
        addItemsCart.count.textContent = getItemCount(storeItems[itemIDX].name);
    }
})

document.addEventListener('click', () => {
    addItemsCart.count.textContent = getItemCount(storeItems[itemIDX].name);
    if (Number(getItemCount(storeItems[itemIDX].name) < 1))
    {
        addItemsCart.single.classList.remove('hidden');
        addItemsCart.multi.classList.add('hidden')
    }
})

addItemsCart.single.addEventListener('click', () => {
    incrementItemTotal(storeItems[itemIDX].name);
    addItemsCart.single.classList.add('hidden');
    addItemsCart.multi.classList.remove('hidden')
})

addItemsCart.add.addEventListener('click', () => {
    incrementItemTotal(storeItems[itemIDX].name);
})

addItemsCart.remove.addEventListener('click', () => {
    decrementItemTotal(storeItems[itemIDX].name);
})