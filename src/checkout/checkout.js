import { changeProductQuantiy, getBagItems, getProductQuantity } from "../handlers/betterhandler"
import storeItems from '../storeItems.json'

const prodcontainer = document.getElementById('products');

document.addEventListener('DOMContentLoaded', () => {
    const items = getBagItems();

    items
    .map((val, idx) => {
        const item = storeItems[val[0]]

        const container = document.createElement('div');
        container.classList.add('product-showcase');

        const img = document.createElement('img');
        img.src = item.images[0];
        container.appendChild(img)

        const productNameCont = document.createElement('span');
        const prodName = document.createElement('b');
        prodName.innerText = item.name;

        const prodType = document = document.createElement('p');
        prodType.innerText = item.category;

        productNameCont.appendChild(prodName);
        productNameCont.appendChild(prodType);
        container.appendChild(productNameCont);

        const price = document.createElement('p');
        price.innerText = item.price;
        container.appendChild(price);

        const div = document.createElement('div');
        div.classList.add('product-quantity');
        

        const counter = document.createElement('span');
        counter.innerText = val[1];
        div.appendChild(counter);

        const total = document.createElement('p');
        total.innerText = `$${Math.round(val[1] * item.price)}`;
        
        const addQuant = document.createElement('a');
        addQuant.innerText = '+';
        addQuant.onclick = () => {
            changeProductQuantiy(idx, 1)
            const temp = getProductQuantity(idx)
            counter.innerText = temp
            total.innerText = `$${Math.round(temp * item.price)}`;
        }
        div.appendChild(addQuant);
        div.appendChild(counter);
        
        const removeQuant = document.createElement('a');
        removeQuant.innerText = '-';
        removeQuant.onclick = () => {
            changeProductQuantiy(idx, -1)
            const temp = getProductQuantity(idx)
            counter.innerText = temp
            total.innerText = `$${Math.round(temp * item.price)}`;
        };
        div.appendChild(removeQuant);

        container.appendChild(div);

        container.appendChild(total);
        
        const removeProd = document.createElement('a');
        removeProd.classList.add('remove-product');

        const img2 = document.createElement('img');
        img2.src = '../assets/close.svg';
        removeProd.appendChild(img2);

        container.appendChild(removeProd);
        prodcontainer.appendChild(container)
    })

})