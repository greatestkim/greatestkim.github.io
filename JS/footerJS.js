const footer = document.querySelector('footer'),
li = footer.querySelectorAll('li');

var menu;

function handleMouseOut(event){
    menu = event.target;
    menu.innerText = 'more';
}

function handleMouseOver(event){
    menu = event.target;
    if(menu.id == 'main'){
        menu.innerText = 'one more time';
    }else if(menu.id == 'type'){
        menu.innerText = 'more cookies';
    }else if(menu.id == 'info'){
        menu.innerText = 'more info';
    }else if(menu.id == 'lang'){
        menu.innerText = 'more lang';
    }
}

function init(){
    for(var i = 0;i<li.length;i++){
        li[i].addEventListener('mouseover',handleMouseOver);
        li[i].addEventListener('mouseout',handleMouseOut);
    }
    
}

init();