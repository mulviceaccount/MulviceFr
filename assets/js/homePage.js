document.addEventListener('DOMContentLoaded', () => {
    //manage toggling in search bar
    let sMagElt = document.getElementById('s_more_i');
    let searchState = "simple";
    sMagElt.addEventListener('click', function () {

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

    //click on search btn
    let searchBtnElt = document.getElementById('submit_search');
    searchBtnElt.addEventListener('click', () => {
        searchCards();
    });

});


function searchCards() {
    //do some ajax
}