document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('bag')) 
        localStorage.setItem('bag', JSON.stringify({'items': {}}));
});

const getStorage = () => {
    return JSON.parse(localStorage.getItem('bag'));
}

const getTotalItems = () => {
    return Object.values(getStorage().items).reduce((acc, val) => val + acc, 0);
}

const giveAllCurrentItems = () => {
    return Object.keys(getStorage().items).filter((name) => getItemTotal(name) > 0);
}

const getItemTotal = (item) => {
    return getStorage().items[item];
}

const setStorage = (obj) => {
    localStorage.setItem('bag', JSON.stringify(obj));
}

const getItemCount = (name) => {
    return getStorage().items[name];
}

const incrementItemTotal = (itemName) => {
    const storage = getStorage();
    storage.items[itemName] = (storage.items[itemName] || 0) + 1;
    setStorage(storage);
}

const decrementItemTotal = (itemName) => {
    const storage = getStorage();
    if (storage.items[itemName] > 0) {
        storage.items[itemName]--;
        setStorage(storage);
        return 1;
    }
    return null;
}

const removeItem = (itemName) => {
    const storage = getStorage();
    storage.items[itemName] = 0;
    setStorage(storage);
}

export { removeItem, decrementItemTotal, incrementItemTotal, getStorage, getItemTotal, getItemCount, getTotalItems, giveAllCurrentItems };