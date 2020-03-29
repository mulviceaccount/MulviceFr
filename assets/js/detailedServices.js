let evaluationDisplay = 'block';
let contactUsDisplay = 'block';
let socialMediaDisplay = 'block';
let planningDisplay = 'block';
let questionsDisplay = 'block';

document.addEventListener('DOMContentLoaded', () => {
    let evaluationToggleElt = document.querySelector("#d_s_m_box_1_2 .box_1_2_1");
    let evaluationCElt = document.querySelector("#d_s_m_box_1_2 .box_1_2_2 ");

    let contactUsToggleElt = document.querySelector("#d_s_m_box_1_3 .box_1_3_1");
    let contactUsCElt = document.querySelector("#d_s_m_box_1_3 .contact_me_c");

    let socialMediaToggleElt = document.querySelector("#d_s_m_box_1_4 .box_1_4_1");
    let socialMediaCElt = document.querySelector("#d_s_m_box_1_4 .box_1_4_2");

    let planningToggleElt = document.querySelector("#d_s_m_box_2_2 .box_2_2_1 ");
    let planningCElt = document.querySelector("#d_s_m_box_2_2 .box_2_2_2");

    let questionsToggleElt = document.querySelector("#d_s_m_box_2_4 .box_2_4_1  ");
    let questionsCElt = document.querySelector("#d_s_m_box_2_4 .box_2_4_2");

    let commentModifyToggleElts = document.getElementsByClassName('modify_comment_c');

    evaluationDisplay = getComputedStyle(evaluationCElt).display;
    contactUsDisplay = getComputedStyle(contactUsCElt).display;
    socialMediaDisplay = getComputedStyle(socialMediaCElt).display;
    planningDisplay = getComputedStyle(planningCElt).display;
    questionsDisplay = getComputedStyle(questionsCElt).display;

    evaluationToggleElt.addEventListener('click', () => {
        setToggleToElt(evaluationCElt, evaluationDisplay);
    });

    contactUsToggleElt.addEventListener('click', () => {
        setToggleToElt(contactUsCElt, contactUsDisplay);
    });

    socialMediaToggleElt.addEventListener('click', () => {
        setToggleToElt(socialMediaCElt, socialMediaDisplay);
    });

    planningToggleElt.addEventListener('click', () => {
        setToggleToElt(planningCElt, planningDisplay);
    });

    questionsToggleElt.addEventListener('click', () => {
        setToggleToElt(questionsCElt, questionsDisplay);
    });

    for (let index = 0; index < commentModifyToggleElts.length; index++) {
        document.addEventListener('click', (e)=> {
            let commentModifyElts = commentModifyToggleElts[index].parentElement.getElementsByClassName('modify_comment_options_c')[0];
            commentModifyElts.style.display = 'none';
        });
        commentModifyToggleElts[index].addEventListener('click', (event)=> {
            event.stopPropagation();
            let commentModifyElts = commentModifyToggleElts[index].parentElement.getElementsByClassName('modify_comment_options_c')[0];
            setToggleToElt(commentModifyElts, 'block');
        });
    }

    let additionalServicesToggleElt = document.querySelector("#d_s_m_box_2_1 .box_2_1_2");
    additionalServicesToggleElt.addEventListener('click', () => {
        let additionalServicesCAllElt = document.getElementById('d_s_m_box_2_1');
        if (parseInt(getComputedStyle(additionalServicesCAllElt).height, 10) < '300')
            additionalServicestoggle(false);
        else
            additionalServicestoggle(true);

    });
});

function setToggleToElt(elt, displayDefault) {
    elt.style.display = (getComputedStyle(elt).display === 'none') ? displayDefault : 'none';
}

function additionalServicestoggle(state) {
    let additionalServicesCAllElt = document.getElementById('d_s_m_box_2_1');
    let additionalServiceschildElt = document.querySelector("#d_s_m_box_2_1 .box_2_1_1");
    let additionalServicesTitleElt = document.querySelector("#d_s_m_box_2_1 .box_2_1_1_1");
    let additionalServicesCElt = document.querySelector("#d_s_m_box_2_1 .box_2_1_1_2");
    let additionalServicesTextElts = document.querySelectorAll("#d_s_m_box_2_1 .box_2_1_1_2 p");

    let height = (window.innerWidth > 425) ? '122px' : '60px';
    let display = (window.innerWidth > 425) ? 'flex' : 'block';
    let margin = (window.innerWidth <= 320) ? "0px 5px 10px 5px" : '10px';
    let textLineHeight = (window.innerWidth <= 320) ? "20px" : '27px';
    
    additionalServicesCAllElt.style.height = (state) ? height : '300px';
    additionalServicesCAllElt.style.lineHeight = (state) ? height : '300px';
    additionalServiceschildElt.style.display = (state) ? display : 'block';
    additionalServicesTitleElt.style.margin = (state) ? '0px' : margin;
    additionalServicesCElt.style.display = (state) ? display : 'block';
    additionalServicesTextElts.forEach((elt)=> elt.style.lineHeight = (state) ? '27px' : textLineHeight);
}
