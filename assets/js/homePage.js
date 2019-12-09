let sMagElt = document.getElementById('s_more_i');
var searchState = "simple";

sMagElt.addEventListener('click', function() {

    let sSimItm = document.getElementsByClassName('s_simple');
    let sAdvItm = document.getElementsByClassName('s_advanced');
    let flexB = "";
    let display = "";

    if (searchState === "simple") {
        searchState = "advanced";
        display = "block";
        sMagElt.style.transform = "rotate(180deg)";

    } else {
        searchState = "simple";
        display = "none";
        sMagElt.style.transform = "rotate(0deg)";

    }

    console.log(getComputedStyle(sSimItm[0]).flexBasis);

    for (let i = 0; i < sSimItm.length; i++) {
        if (getComputedStyle(sSimItm[i]).flexBasis !== "54%") {
            if (searchState === "advanced") {
                sSimItm[i].style.flexBasis = "30%";
            } else {
                sSimItm[i].style = "unset";
            }
        }
    }

    for (let i = 0; i < sAdvItm.length; i++) {
        sAdvItm[i].style.display = display;
    }

});


let sSelect = document.getElementsByClassName("s_select");

for (let i = 0; i < sSelect.length; i++) {
    sSelect[i].addEventListener('change', function() {
        if (sSelect[i].value === "0") {
            sSelect[i].style.color = "grey";
        } else {
            sSelect[i].style.color = "black";
        }
    });
}