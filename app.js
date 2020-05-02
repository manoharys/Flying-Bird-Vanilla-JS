const score = document.querySelector('.score');
const gameMessage = document.querySelector('.gameMessage');
const gameStart = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');

//Game trigger when user clicks this
gameMessage.addEventListener('click', start);
gameStart.addEventListener('click', start);


//Setting event listeners to track keyBoard events
document.addEventListener('keydown', pressOn);
document.addEventListener('keyup', pressOff);

//KeyBoard events
function pressOn(e) {
    console.log(e);
    console.log(e.code);
}

function pressOff(e) {
    console.log(e)
    console.log(e.code);
}


//Function which starts the gamePlay..
function start() {
    console.log("Hyy there game started");
}