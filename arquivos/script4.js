const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const final = document.querySelector('.final');
const gameboard = document.querySelector('.gameboard');
const body = document.querySelector('body');
const score = document.querySelector('.score');
let count = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 600);
}


const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    

    if (pipePosition < 69 & pipePosition > 0 & marioPosition < 150) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        gameboard.style.border = 'none';
        body.style.background= 'black';
        final.style.opacity = '1';
        score.style.color = 'white';

        clearInterval(loop);
    }

        count++;
        score.innerHTML = `${count}`;

        

}, 10);

document.addEventListener('keydown', jump);