import { loadMetro } from "./loadMetro.js";

const start = document.querySelector('#start'),
startBtn = start.querySelector('button');

const qna = document.querySelector('#qna'),
div = qna.querySelectorAll('div');



function handleSelect(event){
  var img = document.querySelector('#background').querySelector('.rotimg');
  img.remove();
  var selec = event.target.parentNode;
  var strNum = selec.id.substring(1);
  var num = parseInt(strNum);
  localStorage.setItem("metroNum",num);
  loadMetro(num);
}

function handleStartBtn(event){
  start.classList.add('off');
  qna.classList.add('on');
  qna.classList.remove('off');
}

function init(){
  startBtn.addEventListener('click',handleStartBtn);
  for(var i=0;i<div.length;i++){
    div[i].addEventListener('click',handleSelect);
  }
}

init();