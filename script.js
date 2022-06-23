const menuToggle = document.querySelector('.toggle');
// const naviagation = document.querySelector('.main-naviagation')
const nav_bar = document.querySelector('.nav_bar');
const drop_down1 = document.querySelector('.drop-down1');
const drop_down2 = document.querySelector('.drop-down2');
const drop_down3 = document.querySelector('.drop-down3');
const drop_down4 = document.querySelector('.drop-down4');

menuToggle.addEventListener('click',() => {
    menuToggle.classList.toggle('active')
    // naviagation.classList.toggle('active')
    nav_bar.classList.toggle('non-active')
});

drop_down1.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    nav_bar.classList.toggle('non-active')
});

drop_down2.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    nav_bar.classList.toggle('non-active')
});

drop_down3.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    nav_bar.classList.toggle('non-active')
});

drop_down4.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    nav_bar.classList.toggle('non-active')
});