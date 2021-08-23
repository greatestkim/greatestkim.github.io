export function loadMetro(num){
    if(num == undefined){
        const background = document.querySelector('#background');
        const newIMG = document.createElement("img");
        newIMG.className='rotimg';
        newIMG.src = `../IMG/metro.png`;
        background.appendChild(newIMG);
    }else{
        const background = document.querySelector('#background');
        const newIMG = document.createElement("img");
        newIMG.className='rotimg';
        newIMG.src = `../IMG/metro${num}.png`;
        background.appendChild(newIMG);
    }
}
var num = localStorage.getItem("metroNum");
loadMetro(num);