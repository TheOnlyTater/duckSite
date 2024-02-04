const navbar = document.getElementById("navbar-element");
const navbar_waves = document.getElementById("navbar-waves");
let prevY = 0;
document.addEventListener("scroll", (e)=>{
    const currY = window.scrollY;
    if (currY > prevY) {
        navbar.classList.add("hide-navbar");
        navbar_waves.classList.remove("hidden");
    } else {
        navbar.classList.remove("hide-navbar");
        navbar_waves.classList.add("hidden");
    }
    prevY = currY;
});
// reste navbar to presets
window.addEventListener("load", ()=>{
    navbar.classList.remove("hide-navbar");
    navbar_waves.classList.add("hidden");
});

//# sourceMappingURL=index.d0aeb09f.js.map
