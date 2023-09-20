const smurf = document.querySelector('.smurf');
const inimigo = document.querySelector('.inimigo');
const final = document.querySelector('.final');
const gameboard = document.querySelector('.gameboard');
const body = document.querySelector('body');
const score = document.querySelector('.score');
let count = 0;

const jump = () => {
    smurf.classList.add('jump');

    setTimeout(() => {

        smurf.classList.remove('jump');

    }, 600);
}


const loop = setInterval(() => {
    
    const inimigoPosition = inimigo.offsetLeft;
    const smurfPosition = +window.getComputedStyle(smurf).bottom.replace('px', '');
    

    if (inimigoPosition < 69 & inimigoPosition > 0 & smurfPosition < 150) {

        inimigo.style.animation = 'none';
        inimigo.style.left = `${inimigoPosition}px`;

        smurf.style.animation = 'none';
        smurf.style.bottom = `${smurfPosition}px`;

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