import storeItems from '../storeItems.json';
import { getProductQuantity, changeProductQuantiy, getBagItems } from '../handlers/betterhandler';


const itemIDX = Number(window.location.hash.substring(1).split('=')[1]);
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
    image: document.getElementById('duck-image'),

    length: document.querySelector('.product-length'),
    width: document.querySelector('.product-width'),
    height: document.querySelector('.product-height'),
    weight: document.querySelector('.product-weight')
}

// generates product page from json
document.addEventListener('DOMContentLoaded', () => {
    const item = storeItems[itemIDX];

    template.title.textContent = item.category;
    template.name.textContent = item.name;
    template.price.textContent = "$" + item.price;
    template.description.textContent = item.description;
    template.image.src = item.images[0]
    
    template.length.textContent = item.length;
    template.width.textContent = item.width;
    template.height.textContent = item.height;
    template.weight.textContent = item.weight;

    // load correct inital button
    if (getProductQuantity(itemIDX) >= 1)
    {
        addItemsCart.single.classList.add('hidden');
        addItemsCart.multi.classList.remove('hidden')

        addItemsCart.count.textContent = getProductQuantity(itemIDX);
    }
})
// enables multi button on start
document.addEventListener('click', () => {
    addItemsCart.count.textContent = getProductQuantity(itemIDX);
    if (getProductQuantity(itemIDX) < 1)
    {
        addItemsCart.single.classList.remove('hidden');
        addItemsCart.multi.classList.add('hidden')
    }
})

addItemsCart.single.addEventListener('click', () => {
    changeProductQuantiy(itemIDX, 1);

    addItemsCart.single.classList.add('hidden');
    addItemsCart.multi.classList.remove('hidden')
})

addItemsCart.add.addEventListener('click', () => {
    changeProductQuantiy(itemIDX, 1);
})

addItemsCart.remove.addEventListener('click', () => {
    changeProductQuantiy(itemIDX, -1);
})
