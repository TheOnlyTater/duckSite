import storeItems from '../storeItems.json';

const storeCardContainer = document.getElementById('item-preview-container');


// Gets the 6 first products then places them on the grid
document.addEventListener('DOMContentLoaded', () => {
    storeItems
    .slice(0, 6)
    .map((product, idx) => {
        const cardContainer = document.createElement('a');
        cardContainer.style.gridArea = `item${idx + 1}`;

        const cardText = document.createElement('p');
        cardText.innerText = product.name;
        cardContainer.appendChild(cardText);

        const cardBackgroundImage = document.createElement('img')
        cardBackgroundImage.src = product.images[0];
        cardContainer.appendChild(cardBackgroundImage);

        storeCardContainer.appendChild(cardContainer)
    })
})