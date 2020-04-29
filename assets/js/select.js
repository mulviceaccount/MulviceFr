document.addEventListener('DOMContentLoaded', () => {
    //manage search bar items
    let selectElt = document.getElementsByClassName('select');

    document.addEventListener('click', () => {
        //hide list when click outside it
        let selectListElt = document.getElementsByClassName('select_list');
        for (let index = 0; index < selectListElt.length; index++) {
            if (!selectListElt[index].classList.contains('none'))
                selectListElt[index].classList.add('none');
        }
    });

    //

    //display list on click
    for (let index = 0; index < selectElt.length; index++) {
        let selectOutputElt = selectElt[index].getElementsByClassName('select_output')[0];
        let blankliElt = selectElt[index].getElementsByClassName('blankli')[0];

        selectOutputElt.addEventListener('click', (e) => {
            e.stopPropagation();

            //hide other list
            let selectListElt = document.getElementsByClassName('select_list');
            for (let i = 0; i < selectListElt.length; i++) {
                if (!selectListElt[i].classList.contains('none'))
                    selectListElt[i].classList.add('none');
            }
            // display our list
            if (selectElt[index].classList.contains('multiple')) {
                let outputHeight = getComputedStyle(selectOutputElt, null).getPropertyValue('height');
                blankliElt.style.height = parseInt(outputHeight, 10) + 11 + "px";
            }

            let selectedElt = selectElt[index].getElementsByClassName('select_list')[0];
            selectedElt.classList.toggle('none');
        });

        //configure the options to change the value of its input when click and display it
        //we pass the value attribute to the input so you should use value for search or change the logic here. (if not understand contact ghatzou ...)
        let optionElts = selectElt[index].querySelectorAll('.option');
        for (let j = 0; j < optionElts.length; j++) {
           
            if (selectElt[index].classList.contains('multiple')) {
                let outputOptionElts = selectOutputElt.getElementsByClassName("output-option-c");
                let optionCheckboxElts = optionElts[j].getElementsByTagName('input')[0];
                //we avoid toggling menu
                optionElts[j].addEventListener('click', (e) => {
                    e.stopPropagation();
                });
                //when the state change 
                optionCheckboxElts.addEventListener('change', (e) => {
                    //we create and add to the display output the value
                    //we verify if it exist                     
                    let find = findOutputOption(outputOptionElts, e);
                    if (e.target.checked) {
                        //we create a new view and display it
                        if (!find.state) {
                            let outputOptionSpanElt = document.createElement('span');
                            outputOptionSpanElt.setAttribute('class', 'output-option-c');

                            let removeOptionSpanElt = document.createElement('span');
                            removeOptionSpanElt.setAttribute('class', 'remove-option');
                            removeOptionSpanElt.textContent = 'x ';
                            outputOptionSpanElt.appendChild(removeOptionSpanElt);

                            let secondOptionSpanElt = document.createElement('span');
                            let secondOptionLabelElt = document.createElement('label');
                            secondOptionLabelElt.textContent = e.target.value;
                            secondOptionLabelElt.setAttribute('for', e.target.id);
                            secondOptionSpanElt.appendChild(secondOptionLabelElt);
                            outputOptionSpanElt.appendChild(secondOptionSpanElt);

                            outputOptionSpanElt.addEventListener('click', (e)=> {
                                e.stopPropagation();
                                e.preventDefault();
                                optionCheckboxElts.checked = false;
                                removeOutputOption(selectOutputElt, outputOptionElts, null, outputOptionSpanElt);
                            })

                            selectOutputElt.appendChild(outputOptionSpanElt);

                            //recalcul the heigh
                            outputHeight = getComputedStyle(selectOutputElt, null).getPropertyValue('height');
                            blankliElt.style.height = parseInt(outputHeight, 10) + 11 + "px";
                        }
                    }
                    //we remove the current display output who match the value
                    else {
                        if (find.state) {
                            removeOutputOption(selectOutputElt, outputOptionElts, find);
                        }
                    }
                });
            }
            else {
                optionElts[j].addEventListener('click', (e) => {
                    e.stopPropagation();
                    let selectListElt = selectElt[index].getElementsByClassName('select_list')[0];
                    let inputElt = selectElt[index].getElementsByTagName('input')[0];
                    selectOutputElt.textContent = optionElts[j].textContent;
                    inputElt.value = optionElts[j].value;
                    selectOutputElt.style.color = '#000';
                    selectListElt.classList.toggle('none');
                });
            }
        }
    }
});

function findOutputOption(outputOptionElts, e) {
    let find = { state: false, index: -1 };
    let outputValuesIndex = 0;
    while (outputValuesIndex < outputOptionElts.length && !find.state) {
        let optionLabelElt = outputOptionElts[outputValuesIndex].getElementsByTagName("label")[0];
        if (optionLabelElt.getAttribute('for') == e.target.id) {
            find.state = true;
            find.index = outputValuesIndex;
        }
        console.log(outputValuesIndex);

        outputValuesIndex++;
    }
    return find;
}

function removeOutputOption(selectOutputElt, outputOptionElts, find, outputOptionSpanElt = null) {
    let node = (outputOptionSpanElt == null) ? outputOptionElts[find.index] : outputOptionSpanElt;

    selectOutputElt.removeChild(node);
}