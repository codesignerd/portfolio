// scroll-to-top.js
// Scroll To Top Btn
const scrollTopBtn = document.getElementById("scroll-top-btn");
let minHeight = 280;

window.addEventListener("scroll", () => {
    let currentHeight = window.scrollY;

    if(currentHeight > minHeight) {
        scrollTopBtn.classList.add("show");
    }
    else {
            scrollTopBtn.classList.remove("show");
    }
});

// scrolling-text.js
// scrolling text 
let text = document.querySelectorAll(".scroll-text p");
let i = 0;

text.forEach(value => {
    value.classList.add("d-none");
    text[i].classList.remove("d-none");
});

function showText() {

    text.forEach(value => {
        value.classList.add("d-none");
    });

    if(i >= text.length) {
        i = 0;
    }
    text[i].classList.remove("d-none");
}

// scrolling-text-timer
const timer = setInterval(() => {
    i++;
    showText(i);
}, 5500);

// card-hover.js
// Cards Hover Effect
const serviceCards = document.querySelectorAll(".card");
serviceCards.forEach(cardHover);

function cardHover(card) {
    card.style.cursor = "pointer";
    // add card shadow
    card.addEventListener("mouseover", () => {
        card.classList.add("shadow-md");
    });
    // remove card shadow
    card.addEventListener("mouseout", () => {
        card.classList.remove("shadow-md");
    });
}

// mobile-menu.js
// responsive-mobile-menu
const navMenu = document.querySelector("nav.navbar");
const mobileMenuBtn = document.querySelector(".hamburger-icon");
const mobileCloseBtn = document.querySelector(".close-icon");

let breakPoint = 768;

// console.log(deviceWidth);

// Open Menu Button
mobileMenuBtn.addEventListener("click", openMenu);

function openMenu() {
    let deviceWidth = window.innerWidth;

    if (deviceWidth < breakPoint) {
        navMenu.classList.add("absolute");
        navMenu.classList.remove("d-none");
    }
}

// Close Menu Button
window.addEventListener("resize",closeMenu);
mobileCloseBtn.addEventListener("click", closeMenu);

function closeMenu() {
    navMenu.classList.remove("absolute");
    navMenu.classList.add("d-none");
}