const navbar = document.getElementById("navbar-element");
let dy = 0;
document.addEventListener("scroll", (e)=>{
    const y = window.scrollY;
    if (y - dy > 0) navbar.classList.add("hide-navbar");
    else navbar.classList.remove("hide-navbar");
    dy = y;
});

//# sourceMappingURL=index.61257536.js.map
