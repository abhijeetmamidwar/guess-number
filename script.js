var body = document.querySelector('body');
var Score = document.querySelector('.score');
var Guess = document.querySelector('.guess');
var number = document.querySelector('.number');
var Message = document.querySelector('.message');
var Highscore = document.querySelector(".highscore");

let score = 20;
let highscore = 0;
let secretNumber = Math.floor(Math.random()*21)

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.floor(Math.random()*21);
    Guess.value = '' ;
    Score.textContent = score;
    body.style.backgroundColor = '#222';
    number.style.width = '15rem';
    number.textContent = '';
    Message.textContent = 'Start Guessing...';
})

document.querySelector('.check').addEventListener('click',function(){
    let guess = Number(Guess.value);
    if (!guess){
        Message.textContent = '⛔ No Number';
    }
    else if(guess === secretNumber){
        if(score > highscore){
            highscore = score;
            Highscore.textContent = score;
        }
        number.textContent = secretNumber;
        Message.textContent = '🎉 correct number';
        body.style.backgroundColor = '#60b347';
        number.style.width = '30rem';
    }
    else if(score > 1){
        score--;
        (guess > secretNumber) ? Message.textContent = '📈 Too High' : Message.textContent = '📉 Too Low' ;
        Score.textContent = score;
    }
    else{
        Message.textContent = '🎇 You Lost';
        Score.textContent = 0;
    }
})


