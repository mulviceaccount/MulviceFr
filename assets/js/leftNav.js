let navListToggleElt = document.getElementById('nav_humburger_c');
let pageElt = document.getElementsByClassName('website_container')[0];
let mainHeaderElt = document.getElementById('main_header');
let leftNavElt = document.getElementById('left_nav_bar');

function toggleLeftNav() {
}

navListToggleElt.addEventListener('click', () => {

    if (window.innerWidth > '768px') return;

    pageElt.style.marginLeft = (getComputedStyle(leftNavElt).display !== 'none') ? '0px' : '200px';
    mainHeaderElt.style.marginLeft = (getComputedStyle(leftNavElt).display !== 'none') ? '0px' : '200px';
    leftNavElt.style.display = (getComputedStyle(leftNavElt).display !== 'none') ? 'none' : 'block';
});

