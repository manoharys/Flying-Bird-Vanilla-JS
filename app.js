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
    player.inplay = true;
    score.classList.remove('hide');
    startScreen.classList.add('hide');
    gameMessage.classList.add('hide');
    gameMessage.innerHTML = "";

    player.speed = 3;
    player.score = 0;
    gameArea.innerHTML = "";
    //Creating bird element
    let bird = document.createElement('div');
    bird.setAttribute('class', 'bird');
    let wing = document.createElement('span')
    wing.pos = 15;
    wing.style.top = wing.pos + "px";
    wing.setAttribute('class', 'wing');
    bird.appendChild(wing)
    gameArea.appendChild(bird);
    player.x = bird.offsetLeft;
    player.y = bird.offsetTop;
    player.pipe = 0;
    let spacing = 300;
    let howMany = Math.floor((gameArea.offsetWidth) / spacing);
    console.log(howMany);
    for (let x = 0; x < howMany; x++) {
        buildPipes(player.pipe * spacing);
    }
    window.requestAnimationFrame(playGame);
}

function buildPipes(startPos) {
    let totalHeight = gameArea.offsetHeight;
    let totalWidth = gameArea.offsetWidth;
    player.pipe++;
    let pipe1 = document.createElement("div");
    pipe1.start = startPos + totalWidth;
    pipe1.classList.add("pipe");
    pipe1.innerHTML = "<br>" + player.pipe;
    pipe1.height = Math.floor(Math.random() * 350);
    pipe1.style.height = pipe1.height + "px";
    pipe1.style.left = pipe1.start + "px";
    pipe1.style.top = "0px";
    pipe1.x = pipe1.start;
    pipe1.id = player.pipe;
  
    gameArea.appendChild(pipe1);
    let pipeSpace = Math.floor(Math.random() * 250) + 150;
    let pipe2 = document.createElement("div");
    pipe2.start = pipe1.start;
    pipe2.classList.add("pipe");
    pipe2.innerHTML = "<br>" + player.pipe;
    pipe2.style.height = totalHeight - pipe1.height - pipeSpace + "px";
    pipe2.style.left = pipe1.start + "px";
    pipe2.style.bottom = "0px";
    pipe2.x = pipe1.start;
    pipe2.id = player.pipe;

    gameArea.appendChild(pipe2);
}



function playGame() {
    if (player.inplay) {
        let bird = document.querySelector(".bird");
        let wing = document.querySelector(".wing");
        let move = false;
        if (keys.ArrowLeft && player.x > 0) {
            player.x -= player.speed;
            move = true;
        }
        if (keys.ArrowRight && player.x < (gameArea.offsetWidth - 100)) {
            player.x += player.speed;
            move = true;
        }
        if (keys.ArrowUp && player.y > 10) {
            player.y -= player.speed * 2;
            move = true;
        }
        if (keys.ArrowDown && player.y < (gameArea.offsetHeight - 50)) {
            player.y += player.speed;
            move = true;
        }

        if (move) {
            wing.pos = (wing.pos == 15) ? 20 : 15;
            wing.style.top = wing.pos + 'px';
        }

        player.y += player.speed;
        //Checking game over condition
        if (player.y > (gameArea.offsetHeight - 50)) {
            player.inplay = false;
            endGame(bird);

        }
        bird.style.top = player.y + "px";
        bird.style.left = player.x + "px";
        window.requestAnimationFrame(playGame);
        player.score++;
        score.innerText = "Score : " + player.score;
    }
}

//EndGame function for termanation of the game
function endGame(bird) {
    gameMessage.classList.remove('hide');
    bird.setAttribute('style', "transform:rotate(180deg");
    score.classList.add('hide');
    gameMessage.insertAdjacentHTML('beforeend', `<p style="color:red;letter-spacing:3px;font-family:fantasy;margin-bottom:10px;">GAME OVER!!!</p><br>YOUR SCORE = ${player.score}<br><br>play again`);

}