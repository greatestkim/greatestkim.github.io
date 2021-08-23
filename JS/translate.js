import { Alien } from "./alien.js";
import { String } from "./string.js";

export function Translator(mode,string){
    var char = [];
    var transText="";
    if(mode == "eng"){
        if(string.indexOf("?") !== -1){
            transText += "¿";
        }else if(string.indexOf("!") !== -1){
            transText += "¡";
        }else{
            transText += "˙";
        }
        string = string.replace(/[^0-9a-zA-Z]/g, ""); 
        string = string.replace(/\s/g,'');
        string = string.toLowerCase();
        var j=0;
        for(var i =string.length-1;i>=0;i--){
            char[j]=(string.charCodeAt([i])-97);
            j++;
            // 1/5의 확률로 б 넣기
        }
        
        for(var i=0;i<string.length ; i++){
            transText += Alien[char[i]];
        }
        localStorage.setItem("atext",transText);
        return transText;
    }else if(mode == "alien"){
        var ranNum = 0;
        string = string.replace(/\s/g,'');
        var prevText = localStorage.getItem("text");
        var prevTransedText = localStorage.getItem("atext");
        prevTransedText = prevTransedText.replace(/\s/g,'');
        if(string == prevTransedText){
            return prevText;
        }else{
            if((string.indexOf("?")|| string.indexOf("¿"))!== -1){
                ranNum = Math.floor(Math.random() * String.question.length);
                string = String.question[ranNum];
                localStorage.setItem("stext",string);
            }else if((string.indexOf("!")|| string.indexOf("¡"))!== -1){
                ranNum = Math.floor(Math.random() * String.exclaimation.length);
                string = String.exclaimation[ranNum];
                localStorage.setItem("stext",string);
            }else{
                ranNum = Math.floor(Math.random() * String.plain.length);
                string = String.plain[ranNum];
                localStorage.setItem("stext",string);
            }
            return string;
        }
    }
    
}
