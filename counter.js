let count = 0;
let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let reset = document.getElementById('reset');
let counter = document.getElementById('counter');
increase.onclick = function(){
    count++;
    counter.textContent = count;
}

decrease.onclick = function(){
    count--;
    counter.textContent = count;
}

reset.onclick = function(){
    count = 0;
    counter.textContent = count;
}