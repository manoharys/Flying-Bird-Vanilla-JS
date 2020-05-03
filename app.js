const score = document.querySelector('.score');
const gameMessage = document.querySelector('.gameMessage');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');

//Game trigger when user clicks this
gameMessage.addEventListener('click', start);
startScreen.addEventListener('click', start);

//key Object
let keys = {};

//Setting up event listeners to track keyBoard events
document.addEventListener('keydown', pressOn);
document.addEventListener('keyup', pressOff);

//KeyBoard events
function pressOn(e) {
    e.preventDefault();
    //console.log(e.code);
    keys[e.code] = true;
    console.log(keys)
}


function pressOff(e) {
    e.preventDefault();
    //console.log(e.code);
    keys[e.code] = false;
    console.log(keys)
}


//Function which starts the gamePlay..
function start() {
    startScreen.classList.add('hide');

}