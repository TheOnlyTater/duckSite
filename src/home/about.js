import storeItems from '../storeItems.json';

const preview_container = document.getElementById('item-preview-container');

document.addEventListener('DOMContentLoaded', () => {
    storeItems.slice(0, 6).forEach((item, idx) => {
        const a = document.createElement('a');
        a.style.gridArea = `item${idx + 1}`;

        const p = document.createElement('p');
        p.innerText = item.name;

        const img = document.createElement('img')
        img.src = item.images[0];

        a.appendChild(p);
        a.appendChild(img);

        preview_container.appendChild(a);
    })
})