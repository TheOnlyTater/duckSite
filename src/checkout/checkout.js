import {giveAllCurrentItems, getItemCount} from '../handlers/cartHandler';

import storeItems from '../storeItems.json'

const productIsland = document.getElementById('checkout-products');

document.addEventListener('DOMContentLoaded', () => {
    const items = giveAllCurrentItems();

    const container = document.createElement('div');
    container.classList.add('product-container');

    const img = document.createElement('img');
    container.appendChild(img);

    const span = document.createElement('span');
    container.appendChild(span);

    const productName = document.createElement('p');
    span.appendChild(productName);
    
    const productQuantity = document.createElement('p');
    span.appendChild(productQuantity);

    const productPrice = document.createElement('p');
    span.appendChild(productPrice);

    
    for (let i = 0; i < items.length; i++)
    {
        let item = null;
        for (let j = 0; j < storeItems.length; j++)
        {
            if (storeItems[j].name === items[i])
            {
                item = storeItems[j];
                break;
            }
        }
        img.src = item.images[0];
        productName.textContent = item.name;
        productPrice.textContent =  "$" + item.price;
        productQuantity.textContent = getItemCount(item.name);

       productIsland.appendChild(container);
    }

})