// On définit les différentes variables

var yearSelect = document.getElementById('birth_year');
var monthSelect = document.getElementById('birth_month');
var daySelect = document.getElementById('birth_day');

function populateDays(month) {
    // On supprime les éléments <option> pour l'élément
    // <select> des jours afin de pouvoir ajouter les prochains
    while (daySelect.firstChild) {
        daySelect.removeChild(daySelect.firstChild);
    }

    // On crée une variable afin de contenir le nombre
    // de jours à afficher
    var dayNum;

    // 31 ou 30 jours ?
    if (month === '1' || month === '3' || month === '5' || month === '7' || month === '8' || month === '10' || month === '12') {
        dayNum = 31;
    } else if (month === '4' || month === '6' || month === '9' || month === '11') {
        dayNum = 30;
    } else {
        // Si le mois est février, on calcule si l'année est bissextile
        console.log(month, ' ', typeof month);
        
        var year = yearSelect.value;
        var leap = new Date(year, 1, 29).getMonth() == 1;
        dayNum = leap ? 29 : 28;
    }

    // on ajoute le bon nombre de jours dans autant
    // d'éléments <option> pour l'élément <select>
    // pour la journée
    for (i = 1; i <= dayNum; i++) {
        var option = document.createElement('option');
        option.textContent = i;
        daySelect.appendChild(option);
    }

    // Si le jour précédent a déjà été défini on utilise
    // la valeur de ce jour pour daySelect afin d'éviter de
    // réinitialiser le jour lorsqu'on change l'année
    if (previousDay) {
        daySelect.value = previousDay;

        // Si le jour précédent correspond au dernier jour d'un mois
        // et que le mois sélectionné possède moins de jours (par 
        // exemple en février)
        if (daySelect.value === "") {
            daySelect.value = previousDay - 1;
        }

        if (daySelect.value === "") {
            daySelect.value = previousDay - 2;
        }

        if (daySelect.value === "") {
            daySelect.value = previousDay - 3;
        }
    }
}

function populateYears() {
    // On obtient l'année courante
    var date = new Date();
    var year = date.getFullYear();

    // On affiche l'année courante et les 100 années
    // précédentes pour l'élément <select> destiné à
    // stocker l'année
    for (var i = 0; i <= 100; i++) {
        var option = document.createElement('option');
        option.textContent = year - i;
        yearSelect.appendChild(option);
    }
}

// Lorsque la valeur du mois ou de l'année est modifiée
// on relance populateDays()
yearSelect.onchange = function () {
    populateDays(monthSelect.value);
}

monthSelect.onchange = function () {
    populateDays(monthSelect.value);
}

// On conserve le jour sélectionné
var previousDay;

// On met à jour la journée utilisé précédemment
// (voir la fin de populateDays() pour voir où
// est utilisée cette valeur)
daySelect.onchange = function () {
    previousDay = daySelect.value;
}

document.addEventListener('DOMContentLoaded', () => {
    let month = ['janvier',
        'février',
        'mars',
        'avril',
        'mai',
        'juin',
        'juillet',
        'août',
        'septembre',
        'octobre',
        'novembre',
        'décembre'
    ];
    // on ajoute les mois
    for (i = 0; i < 12; i++) {
        var option = document.createElement('option');
        option.textContent = month[i];
        option.value = i + 1 + '';
        monthSelect.appendChild(option);
    }
    populateDays('1');
    populateYears();
});