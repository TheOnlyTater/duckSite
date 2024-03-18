import storeItems from "../storeItems.json";
const storeCardContainer = document.getElementById("store-item-container");

// generates a card for each product that links to its storepage
document.addEventListener("DOMContentLoaded", () => {
    storeItems.forEach((storeItem, idx) => {
        const cardContainer = document.createElement('a');
        cardContainer.classList.add('store-card');
        cardContainer.href = `template.html#id=${idx}`;


        const backgroundImage = document.createElement('img');
        backgroundImage.src =  storeItem.images[0];
        cardContainer.appendChild(backgroundImage);
        
        const textContainer = document.createElement('div');

        const productName = document.createElement('h2');
        productName.innerText = storeItem.name;
        textContainer.appendChild(productName);


        const productPrice = document.createElement('p');
        productPrice.innerText = `$${storeItem.price}`;
        textContainer.appendChild(productPrice);

        cardContainer.appendChild(textContainer);

        storeCardContainer.appendChild(cardContainer);
    })
})