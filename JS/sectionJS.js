import { Translator } from "./translate.js";

//left
const left = document.querySelector("#left");
//top
const leftTopText = left.querySelector(".top").querySelector(".text");
const langBtn = left.querySelector(".top").querySelector("#change").querySelector("button");
//mid
const leftForm = left.querySelector("form");
const leftTextarea = leftForm.querySelector("textarea");
const leftTextLen = left.querySelector("#textLen");
//btm
const leftBottom = left.querySelector(".btm"),
submitBtn = leftBottom.querySelector("button");

//right
const right = document.querySelector("#right");
//mid
const rightTranslator = right.querySelector(".mid").querySelector(".text");
//btm
const copyBtn = right.querySelector(".btm").querySelector("#copy").querySelector("button");
const likeBtn = right.querySelector(".btm").querySelector("#likes").querySelector("button");
//modal
const body = document.querySelector('body');
const modal = document.querySelector('.modal'); 
const modalBody = document.querySelector('.modal_body'); 
const btnOpenPopup = document.querySelector('#share').querySelector("button");

const likesModal = document.querySelector('#likesModal'); 
const likesModalBody = likesModal.querySelector('.modal_body');

const faceb = modalBody.querySelector("#face"),
twit = modalBody.querySelector("#twit"),
kakaot = modalBody.querySelector("#kakao");

var mode = "eng";
var n = 0;

function shareTwitter() {
    var sendText = "김하민"; // 전달할 텍스트
    var sendUrl = "http://127.0.0.1:5500/HTML/index.html"; // 전달할 URL
    window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
}
function shareFacebook() {
    var sendUrl = "http://127.0.0.1:5500/HTML/index.html"; // 전달할 URL
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}
twit.addEventListener('click',shareTwitter);
faceb.addEventListener('click',shareFacebook);

btnOpenPopup.addEventListener('click', () => { 
    modal.classList.toggle('show');
    modalBody.classList.toggle('show');
    body.style.overflow = 'hidden';
    //modal.style.opacity = "0.4";
});
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.toggle('show');
        modalBody.classList.toggle('show');
        if (!modal.classList.contains('show')) {
            body.style.overflow = 'auto';
        }
    }
});

function handleKeyup(event){
    n = leftTextarea.value.length;
    leftTextLen.innerText = `${n}/1000`;
}

function handleLike(event){
    var text = rightTranslator.innerText;
    likesModal.classList.toggle('show');
    likesModalBody.classList.toggle('show');
    body.style.overflow = 'hidden';
    if(rightTranslator.innerText !==""){
        //likesModalBody.innerText = text;
    }else{
        likesModalBody.innerText = 'empty';
    }
    setTimeout(function(){ 
        likesModal.classList.toggle('show');
        likesModalBody.classList.toggle('show');
     }, 1000);

}

function handleCopy(event){
    var text = rightTranslator.innerText;
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = text;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
    alert("copied successfully!")
}

function loadRightTranslator(text){
    rightTranslator.innerText = text;
}

function handleSubmit(event){
    event.preventDefault();
    var text = leftTextarea.value;
    var transText = "";
    if(mode == "eng"){
        //translate eng -> alien
        localStorage.setItem("text", text);
    }else if(mode == "alien"){
        //translate alien -> eng
        
    }else{
        console.log(fail);
    }
    transText = Translator(mode,text);
    loadRightTranslator(transText);

    likeBtn.addEventListener("click",handleLike);
    copyBtn.addEventListener("click",handleCopy);
}

function handleClickLangBtn(event){
    leftTextarea.value = "";
    rightTranslator.innerText ="";
    if(langBtn.name == "eng"){
        langBtn.name = "alien";
        langBtn.innerText = "eng";
        leftTopText.innerText = "alien";
        mode = "alien"
    }else if(langBtn.name == "alien"){
        langBtn.name = "eng";
        langBtn.innerText = "alien";
        leftTopText.innerText = "eng";
        mode = "eng";
    }
}

function handleLang(){    
    langBtn.addEventListener("click",handleClickLangBtn);
}

function init(){
    handleLang();
    submitBtn.addEventListener("click",handleSubmit);
    leftTextarea.addEventListener("keyup",handleKeyup);
}

init();