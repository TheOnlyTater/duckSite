import { changeProductQuantiy, getBagItems, getProductQuantity, removeAllItems } from "../handlers/betterhandler"
import storeItems from '../storeItems.json'

const prodcontainer = document.getElementById('products');
const checkoutButton = document.getElementById('checkout-button')

document.addEventListener('DOMContentLoaded', () => {
    const items = getBagItems();
    
    // if bag is empty
    if (items.length == 0)
    {
        const cont = document.createElement('div');
        cont.classList.add('empty-bag');

        const img = document.createElement('img');
        img.src = './store-bag-icon.9422d95b.svg'
        cont.appendChild(img);

        const p = document.createElement('p');
        p.innerText = "bag is empty";
        cont.appendChild(p);

        prodcontainer.appendChild(cont);
    }


    items
    .map((val) => {
        const idx = val[0];
        const item = storeItems[idx];

        const container = document.createElement('div');
        container.classList.add('product-showcase');

        const img = document.createElement('img');
        img.src = item.images[0];
        container.appendChild(img)

        // conatins name and type
        const productNameCont = document.createElement('span');
        const prodName = document.createElement('b');
        prodName.innerText = item.name;

        const prodType = document = document.createElement('p');
        prodType.innerText = item.category;

        productNameCont.appendChild(prodName);
        productNameCont.appendChild(prodType);
        container.appendChild(productNameCont);

        const price = document.createElement('p');
        price.innerText = `$${item.price}`;
        container.appendChild(price);

        // contains quantity
        const div = document.createElement('div');
        div.classList.add('product-quantity');

        const counter = document.createElement('span');
        counter.innerText = val[1];
        div.appendChild(counter);

        const total = document.createElement('p');
        total.innerText = `$${Math.round(val[1] * item.price)}`;
        
        // increases item by 1 and updates element
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
        
        // removes item if pressed
        const removeQuant = document.createElement('a');
        removeQuant.innerText = '-';
        removeQuant.onclick = () => {
            changeProductQuantiy(idx, -1)
            const temp = getProductQuantity(idx)
            counter.innerText = temp
            total.innerText = `$${Math.round(temp * item.price)}`;
            if (temp == 0) {
                container.remove();
            }
        };
        div.appendChild(removeQuant);

        container.appendChild(div);

        container.appendChild(total);
        
        // decrements item by 1 and updates element
        const removeProd = document.createElement('a');
        removeProd.classList.add('remove-product');
        removeProd.onclick = () => {
            changeProductQuantiy(idx, -1 * val[1]);
            container.remove();
        }

        const img2 = document.createElement('img');
        img2.src = './close.svg';

        removeProd.appendChild(img2);

        container.appendChild(removeProd);
        prodcontainer.appendChild(container)
    })

})

// checkout button has not functionallity currently and
// remove everything in the bag instead
checkoutButton.addEventListener('click', () => {
    removeAllItems();
})