document.addEventListener('DOMContentLoaded', () => {
    var loginPopUpElt = document.getElementById('p_u_login');
    if(loginPopUpElt != null) {
        var loginPopUpCloseElt = document.getElementById('p_u_login_close');
        loginPopUpCloseElt.addEventListener('click', ()=> {
            closePopUp(loginPopUpElt);
        });
    }
});

function closePopUp(elt) {
    elt.style.display = 'none';
}