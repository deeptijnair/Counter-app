

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let resetEl = document.getElementById("save-el").innerText;
let count = 0;

function increment() {
    count++;
    countEl.innerText = count;
}


function save() {
    let countStr = " " + count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.innerText = count;
}

function reset(){
    let saveEl = document.getElementById("save-el");
    count = 0;
    countStr = 0;
    countEl.innerText = count;
    saveEl.innerText = resetEl;
}