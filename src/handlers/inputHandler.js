

const inputChecker = (input, maxLength, type) => {
    const test = document.createElement('input');
    test.innerText.leng
    if (input.innerHTML.length > maxLength)
    {
        input.innerText = input.innerHTML.substr(0, maxLength);
        
        setTimeout(() => {
            input.classList.add('error');
        }, 400);

        input.classList.remove('error');
    }

}
