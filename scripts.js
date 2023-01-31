let mobileMenu = document.getElementById('mobile__overlay');
let menuOpen = document.querySelector('.mobile-menu__icon');
let menuClose = document.querySelector('.mobile-menu-close__icon');

menuOpen.addEventListener('click', function() {
    mobileMenu.style.display = 'block';
})

menuClose.addEventListener('click', function() {
    mobileMenu.style.display = 'none';
})
