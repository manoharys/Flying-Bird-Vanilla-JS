const score = document.querySelector('.score');
const gameMessage = document.querySelector('.gameMessage');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');

//Game trigger when user clicks this
gameMessage.addEventListener('click', start);
startScreen.addEventListener('click', start);

//Objects
let keys = {};
let player = {};

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
    score.classList.toggle('hide');
    startScreen.classList.add('hide');
    player.speed = 2;
    //Creating bird element
    let bird = document.createElement('div');
    bird.setAttribute('class', 'bird');
    let wing = document.createElement('span')
    wing.setAttribute('class', 'wing');
    bird.appendChild(wing)
    gameArea.appendChild(bird);
    player.x = bird.offsetLeft;
    player.y = bird.offsetTop;
    window.requestAnimationFrame(playGame);
}


function playGame() {
    console.log(player);
    let bird = document.querySelector(".bird");
    let wing = document.querySelector(".wing");

    if (keys.ArrowLeft) {
        player.x -= player.speed;
    }
    if (keys.ArrowRight) {
        player.x += player.speed;
    }
    if (keys.ArrowUp) {
        player.y -= player.speed;
    }
    if (keys.ArrowDown) {
        player.y += player.speed;
    }





    bird.style.top = player.y + "px";
    bird.style.left = player.x + "px";




    window.requestAnimationFrame(playGame);
}