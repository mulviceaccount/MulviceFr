document.addEventListener('DOMContentLoaded', () => {
    var image = document.getElementById('m_s_f_galery_output');
    image.addEventListener('error', errorImage);

    var statut = document.getElementById('service_statut');
    if (statut != null) {
        statut.addEventListener('click', toggleStatut);
    }

    checkForImage(image);
});

function checkForImage(image) {

    var label = document.getElementById('m_s_f_galery_label');
    var btnsC = document.getElementById('m_s_f_galery_btns');

    if (image.getAttribute('src') != null && image.getAttribute('src') != '') {
        label.style.display = 'none';
        btnsC.style.display = 'flex';
    }
}

function errorImage() {
    var label = document.getElementById('m_s_f_galery_label');
    var btnsC = document.getElementById('m_s_f_galery_btns');

    label.style.display = 'block';
    btnsC.style.display = 'none';
}

function loadCoverImg() {
    if (typeof event.target.files[0] == 'undefined')
        return;

    var image = document.getElementById('m_s_f_galery_output');


    image.src = URL.createObjectURL(event.target.files[0]);
    checkForImage(image);
}

function toggleStatut() {
    var statut = document.getElementById('service_statut');

    statut.classList.forEach((elt)=> {
        if(elt === 'padding') {
            statut.classList.remove('padding');
            statut.classList.add('active');
            return;
        }
        if(elt === 'active') {
            statut.classList.remove('active');
            statut.classList.add('padding');
            return;
        }
    })
}