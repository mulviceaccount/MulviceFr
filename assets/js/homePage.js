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

    //manage search bar items
    let selectElt = document.getElementsByClassName('select');
    let optionElts = document.querySelectorAll('.select .option');

    document.addEventListener('click', () => {
        //hide list when click outside it
        let selectListElt = document.getElementsByClassName('select_list');
        for (let index = 0; index < selectListElt.length; index++) {
            if (!selectListElt[index].classList.contains('none'))
                selectListElt[index].classList.add('none');
        }
    });

    //display list on click
    for (let index = 0; index < selectElt.length; index++) {
        let selectOutputElt = selectElt[index].getElementsByClassName('select_output')[0];
        selectOutputElt.addEventListener('click', (e) => {
            e.stopPropagation();

            //hide other list
            let selectListElt = document.getElementsByClassName('select_list');
            for (let i = 0; i < selectListElt.length; i++) {
                if (!selectListElt[i].classList.contains('none'))
                    selectListElt[i].classList.add('none');
            }
            // display our list
            let selectedElt = selectElt[index].getElementsByClassName('select_list')[0];
            selectedElt.classList.toggle('none');
        });
    }

    //configure the options to change the value of its input when click and display it
    //we pass the value attribute to the input so you should use value for search or change the logic here. (if not understand contact ghatzou ...)
    for (let index = 0; index < optionElts.length; index++) {
        optionElts[index].addEventListener('click', (e) => {
            e.stopPropagation();

            let node = optionElts[index];
            //get the specific output
            let find = false;
            while (!find) {
                if (node && node.classList.contains('select'))
                    find = true;
                else
                    node = node.parentElement;
            }
            if (node) {
                let selectOutputElt = node.getElementsByClassName('select_output')[0];
                let selectListElt = node.getElementsByClassName('select_list')[0];
                let inputElt = node.getElementsByTagName('input')[0];
                selectOutputElt.textContent = optionElts[index].textContent;
                inputElt.value = optionElts[index].value;
                selectOutputElt.style.color = '#000';
                selectListElt.classList.toggle('none');
            }
        });
    }

    //click on search btn
    let searchBtnElt = document.getElementById('submit_search');
    searchBtnElt.addEventListener('click', () => {
        searchCards();
    });

});


function searchCards() {
    //do some ajax
}