
const roll = function (foo) {    
    return Math.floor(Math.random() * foo) + 1;
}
let x = roll(6);  
let dice = document.getElementsByClassName('myid');
dice[0].innerHTML = x;