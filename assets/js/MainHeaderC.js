let mainHeaderUserElt = document.getElementById('m_h_userPhoto');
let subHeaderElt = document.getElementById('main_header_sub');

let subHeaderDisplayed = getComputedStyle(subHeaderElt).display !== 'none';

mainHeaderUserElt.addEventListener('click', () => {
    subHeaderElt.style.display = (subHeaderDisplayed) ? 'none' : 'block';
    subHeaderDisplayed = !subHeaderDisplayed;
});