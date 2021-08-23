const content = document.querySelector('#content');

function handleClick(event){
    location.href="lang.html";
}

function init(){
    content.addEventListener('click',handleClick);
}

init();