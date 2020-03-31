let evaluationDisplay = 'block';
let contactUsDisplay = 'block';
let socialMediaDisplay = 'block';
let planningDisplay = 'block';
let questionsDisplay = 'block';
var commentIsInEditMode = { state: false, toggleElt: null };

document.addEventListener('DOMContentLoaded', () => {
    let evaluationToggleElt = document.querySelector("#d_s_m_box_1_2 .box_1_2_1");
    let evaluationCElt = document.querySelector("#d_s_m_box_1_2 .box_1_2_2 ");

    let contactUsToggleElt = document.querySelector("#d_s_m_box_1_3 .box_1_3_1");
    let contactUsCElt = document.querySelector("#d_s_m_box_1_3 .contact_me_c");

    let socialMediaToggleElt = document.querySelector("#d_s_m_box_1_4 .box_1_4_1");
    let socialMediaCElt = document.querySelector("#d_s_m_box_1_4 .box_1_4_2");

    let planningToggleElt = document.querySelector("#d_s_m_box_2_2 .box_2_2_1");
    let planningCElt = document.querySelector("#d_s_m_box_2_2 .box_2_2_2");

    let questionsToggleElt = document.querySelector("#d_s_m_box_2_4 .box_2_4_1");
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

    //create a new comment
    let mainCommentTextElt = document.querySelector('.box_2_4_2_1_1 textarea');
    let mainCommentSubmitBtnElt = document.getElementsByClassName('box_2_4_2_1_2')[0]; 

    mainCommentSubmitBtnElt.addEventListener('click', function(e) {
        e.preventDefault();
        if (mainCommentTextElt.value != '') {
            //do some ajex
            //TODO: you can use promise to control if we create new comment or not 
            createNewComment();
        }
        else {
            //display msg err
            let commentErrElt = document.createElement('small');
            commentErrElt.style.color = 'red';
            commentErrElt.textContent = "votre commentaire ne peut pas étre vide !";
            mainCommentTextElt.parentElement.insertBefore(commentErrElt, mainCommentTextElt);

            mainCommentTextElt.addEventListener('keydown', ()=> {
                if(mainCommentTextElt.value == '') {
                    commentErrElt.style.display = "block";
                }
                else {
                    commentErrElt.style.display = "none";
                }
            });
        }
    });
    

    //for each comment menu toggle
    for (let index = 0; index < commentModifyToggleElts.length; index++) {

        //display comment menu on click in comment edit icon
        commentModifyToggleElts[index].addEventListener('click', (event) => {
            event.stopPropagation();
            //show display menu if there is no other operation on comment
            if (!commentIsInEditMode.state) {
                let commentModifyElts = commentModifyToggleElts[index].parentElement.getElementsByClassName('modify_comment_options_c')[0];
                setToggleToElt(commentModifyElts, 'block');
            }
        });
        //when click in edit comment menu item
        editComment(commentModifyToggleElts[index]);
        //when delete in edit comment menu item
        deleteComment(commentModifyToggleElts[index]);
        //when reply in edit comment menu item
        replyComment(commentModifyToggleElts[index]);
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
    additionalServicesTextElts.forEach((elt) => elt.style.lineHeight = (state) ? '27px' : textLineHeight);
}

//we specify when we hidde our elements 
(function () {
    document.addEventListener('click', (e) => {
        let commentModifyElts = document.getElementsByClassName('modify_comment_options_c');
        for (let index = 0; index < commentModifyElts.length; index++) {
            commentModifyElts[index].style.display = 'none';
        }
    });
})();

function editComment(toggleElt) {
    let editElt = toggleElt.parentElement.getElementsByClassName('edit_comment')[0];
    editElt.addEventListener('click', (e) => {
        e.stopPropagation();
        //escape change when another one is on
        if (commentIsInEditMode.state)
            return;
        //hide comment menu 
        let commentModifyElts = toggleElt.parentElement.getElementsByClassName('modify_comment_options_c')[0];
        commentModifyElts.style.display = 'none';
        //hide the comment paragraph
        let commentParagraph = toggleElt.parentElement.getElementsByClassName('comment_item')[0];
        commentParagraph.style.display = "none";
        //show an input to replace the paragraph for edit
        let input = toggleElt.parentElement.getElementsByClassName('comment_item_input')[0];
        input.style.display = "block";
        input.value = commentParagraph.textContent.replace(/[  \t\n]+/g, ' ');
        input.focus();
        input.setSelectionRange(0, input.value.length);
        //display the btns 
        let editCommentBtns = toggleElt.parentElement.getElementsByClassName('change_reply_btn')[0];
        let replyBtn = editCommentBtns.getElementsByClassName('change_reply_btn_submit')[0];
        let cancelBtn = editCommentBtns.getElementsByClassName('change_reply_btn_cancel')[0];
        editCommentBtns.style.display = 'flex';
        //enter in edit mode
        commentIsInEditMode = { state: true, toggleElt: toggleElt };
        //when click on submit change comment
        replyBtn.addEventListener('click', (ev) => {
            ev.stopPropagation();
            //do some ajex
            //TODO : if you want to return a value from the ajax to know if the change is done or there is some errors
            editCommentBtns.style.display = 'none';
            input.style.display = "none";
            commentParagraph.textContent = input.value;
            commentParagraph.style.display = "block";
            //close the edit mode
            commentIsInEditMode.state = false;
            commentIsInEditMode.toggleElt = null;
        });
        //when click on cancel comment botton 
        cancelBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            if (window.confirm('étes vous sur de vouloir abondonner le changement ?')) {
                editCommentBtns.style.display = 'none';
                input.style.display = "none";
                commentParagraph.textContent = input.value;
                commentParagraph.style.display = "block";
                //close the edit mode
                commentIsInEditMode.state = false;
                commentIsInEditMode.toggleElt = null;
            }
        });
    });
}

function deleteComment(toggleElt) {
    if (commentIsInEditMode.state)
        return;
    let deleteElt = toggleElt.parentElement.getElementsByClassName('delete_comment')[0];
    deleteElt.addEventListener('click', (e) => {
        e.stopPropagation();
        //hide comment menu 
        let commentModifyElts = toggleElt.parentElement.getElementsByClassName('modify_comment_options_c')[0];
        commentModifyElts.style.display = 'none';
        //show message to confirm delete
        if (window.confirm("étes vous sur de vouloir supprimer ce commentaire ?")) {
            node = toggleElt;
            //get the node to delete and its child
            let find = false;
            while (!find) {
                if (node && node.nodeName.toLowerCase() == 'li')
                    find = true;
                else
                    node = node.parentElement;
            }
            if (node) {
                //do some ajax 
                //TODO : if you want to return a value from the ajax to know if the change is done or there is some errors            
                node.parentElement.removeChild(node);
            }
        }
    });
}

function replyComment(toggleElt) {
    if (commentIsInEditMode.state)
        return;
    let replyElt = toggleElt.parentElement.getElementsByClassName('reply_comment')[0];
    replyElt.addEventListener('click', (e) => {
        e.stopPropagation();
        //hide comment menu 
        let commentModifyElts = toggleElt.parentElement.getElementsByClassName('modify_comment_options_c')[0];
        commentModifyElts.style.display = 'none';
        let node = toggleElt;
        //show the reply box
        let find = false;
        while (!find) {
            if (node && node.nodeName.toLowerCase() == 'li' && node.classList.contains('main_comments_items'))
                find = true;
            else
                node = node.parentElement;
        }
        if (node) {
            console.log(node);

            let replyBoxElt = node.getElementsByClassName('sub_main_comment_reply_c')[0];
            let textAreaElt = node.getElementsByClassName('sub_main_comment_reply')[0];
            let listElt = node.parentElement;
            replyBoxElt.style.display = 'block';
            textAreaElt.value = '';
            textAreaElt.focus();
            //reply btn submit
            let replyBtnElt = node.getElementsByClassName('sub_menu_reply_btn')[0];
            replyBtnElt.addEventListener('click', (ev) => {
                ev.stopPropagation();
                if (textAreaElt.value != '') {
                    //do some ajex
                    //TODO: you can use promise to control if we create new comment or not 
                    createNewCommentReply();
                }
                else {
                    //display msg err
                    let replyMsgErrElt = document.createElement('small');
                    replyMsgErrElt.style.color = 'red';
                    replyMsgErrElt.textContent = "votre commentaire ne peut pas étre vide !";
                    replyBoxElt.insertBefore(replyMsgErrElt, textAreaElt);

                    textAreaElt.addEventListener('keydown', ()=> {
                        if(textAreaElt.value == '') {
                            replyMsgErrElt.style.display = "block";
                        }
                        else {
                            replyMsgErrElt.style.display = "none";
                        }
                    });
                }
            });
        }

    });
}

function createNewComment() {
    //for now we just reload the page after adding a new comment to display it
    location.reload(true);
 }

function createNewCommentReply() {
   //for now we just reload the page after adding a new comment to display it
   location.reload(true);
}

