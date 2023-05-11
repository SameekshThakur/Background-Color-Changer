
// JavaScript File to create an Random Events when the Button is Clicked 

"use strict";

const btn = document.getElementById("cbc");

const randomColor = () => {
    let val = "0123456789ABCDEF";
    let hash = "#"
    for(let i = 0; i<6; i++){
        hash = hash + val[Math.floor(Math.random() * 16)];
    }
    return hash;
}

console.log(randomColor());

function ChangeBgColor(){
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", ChangeBgColor);

