import products from '../storeItems.json';


// creates a list of all products in corresponding order
document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('bag'))
    {
        const items = [...products.map((obj, idx) => [idx, 0])]
        localStorage.setItem('bag', JSON.stringify(items));
    }
});

const getCurrentItems = () => {
    return JSON.parse(localStorage.getItem('bag'));
}

const updateItemsState = (items) => {
    localStorage.setItem('bag', JSON.stringify(items));
}

// item[0] = json index, item[1] = quantity
const getCurrentPriceTotal = () => {
    return getCurrentItems().reduce((item, acc) => products[item[0]] * item[1] + acc, 0);
}

const getProductPrice = (idx) => {
    return getCurrentItems()[idx][1] * products[idx].price;
}

const changeProductQuantiy = (idx, value= NaN) => {
    const newItems = getCurrentItems();

    if (value === NaN)
        value = -1 * newItems[idx][1]
    else if (value < 0 && value + newItems[idx][1] < 0) return;
    
    newItems[idx][1] += value;
    updateItemsState(newItems);
}

const getProductQuantity = (idx) => {
    return getCurrentItems()[idx][1];
}

const getTotalProductQuantity = () => {
    return parseFloat(getCurrentItems().reduce((item, acc) => item[1] + acc, 0));
}

const getBagItems = () => {
    return [...getCurrentItems().filter((item) => item[1] > 0)];
}

export {getProductPrice, getCurrentPriceTotal, changeProductQuantiy, getProductQuantity, getBagItems, getTotalProductQuantity}