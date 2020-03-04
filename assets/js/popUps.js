document.addEventListener('DOMContentLoaded', () => {
    var loginPopUpElt = document.getElementById('p_u_login');
    var beRecipentElt = document.getElementById('be_recipent_bt_id');
    var beRecipentElt2 = document.getElementById('be_recipent_bt2_id');
    if(loginPopUpElt != null) {
        var loginPopUpCloseElt = document.getElementById('p_u_login_close');
        loginPopUpCloseElt.addEventListener('click', ()=> {
            closePopUp(loginPopUpElt);
        });
        beRecipentElt.addEventListener('click', ()=> {
            openPopUp(loginPopUpElt);
        });
        beRecipentElt2.addEventListener('click', ()=> {
            openPopUp(loginPopUpElt);
        });
    }

});

function closePopUp(elt) {
    elt.style.display = 'none';
}

function openPopUp(elt) {
    elt.style.display = '';
}