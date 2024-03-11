import storeItems from "../storeItems.json";
const cardContainer = document.getElementById("store-item-container");



document.addEventListener("DOMContentLoaded", () => {
    storeItems.forEach((storeItem, idx) => {
        const storeCard = document.createElement('a');
        storeCard.href = `template.html#id=${idx}`;

        storeCard.classList.add('store-card');

        const backgroundImage = document.createElement('img');
        backgroundImage.src =  storeItem.images[0];
        
        const div = document.createElement('div');

        const productName = document.createElement('h2');
        productName.innerText = storeItem.name;

        const productPrice = document.createElement('p');
        productPrice.innerText = storeItem.price;

        div.appendChild(productName);
        div.appendChild(productPrice);

        storeCard.appendChild(backgroundImage);
        storeCard.appendChild(div);

        cardContainer.appendChild(storeCard);
    })
})