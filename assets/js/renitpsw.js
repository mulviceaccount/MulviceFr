document.addEventListener('DOMContentLoaded', () => {
    let submitBtn = document.getElementsByClassName('f_btns_submit')[0];
    submitBtn.addEventListener('click', function (ev) {
        let psw = document.getElementById("new_password");
        let cpsw = document.getElementById("new_password_confirmation");
        //for now we prevent the event to escap reload, but do here what you want
        //do some ajax
        ev.preventDefault();

        if (validatePassword(psw, cpsw)) {
            let succesElts = document.getElementsByClassName("renitpconf");
            for (let index = 0; index < succesElts.length; index++) {
                succesElts[index].style.display = 'block';
            }
            psw.classList.remove('white');
            cpsw.classList.remove('white');

            psw.disabled = true;
            cpsw.disabled = true;
        }
    });
})

function validatePassword(psw, cpsw) {
    if (psw.value != '' && psw.value == cpsw.value) {
        cpsw.setCustomValidity('');
        return true;
    } else {
        if (psw.value != '')
            cpsw.setCustomValidity("Passwords Don't Match");
        else
            cpsw.setCustomValidity("Veuillez d'abord entrer un mot de passe !");
        return false;
    }
}