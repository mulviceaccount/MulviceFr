document.addEventListener('DOMContentLoaded', () => {
    let submitBtn = document.getElementsByClassName('f_btns_submit')[0];
    submitBtn.addEventListener('click', function (ev) {
        let mail = document.getElementById("mail");
        //for now we prevent the event to escap reload, but do here what you want
        //do some ajax
        ev.preventDefault();

        if (ifMailValid(mail)) {
            let succesElts = document.getElementsByClassName("renitpconf");
            for (let index = 0; index < succesElts.length; index++) {
                succesElts[index].style.display = 'block';
            }
            mail.classList.remove('white');

            mail.disabled = true; 
        }
    });
})

function ifMailValid(mail) {
    if (mail.value != '') {
        mail.setCustomValidity('');
        return true;
    } else {
        mail.setCustomValidity("Veuillez d'abord entrer votre mail !");
        return false;
    }
}