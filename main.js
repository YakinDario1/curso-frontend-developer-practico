const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')
;

menuEmail.addEventListener('click', () => {
    console.log('clicked');
    desktopMenu.classList.toggle('inactive');
} )

menuHamIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive');
})

console.log("holi");