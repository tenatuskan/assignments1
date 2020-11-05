
const roll = function (foo) {    
    return Math.floor(Math.random() * foo) + 1;
}

let dice = document.getElementsByClassName('dice');

for (let index = 0; index < dice.length; index++) {
    let x = roll(6); 
    dice[index].innerHTML = x; 
     
}
