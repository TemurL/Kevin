const guessField = document.querySelector('#guessField');
const guessSumbit = document.querySelector('#guessSumbit');
const result = document.querySelector('.result');
const lastguesses = document.querySelector('.lastguesses');
const lowOrHi = document.querySelector('.lowOrHi');

const resetBtn = document.createElement('button');
resetBtn.textContent = 'Играть еще';
resetBtn.onclick = () => {
    location.reload()
}
let randomNumber = Math.floor(Math.random() * 100) + 1;

let guessCount = 1;

const checkGuess = () => {
    const userGuess = Number(guessField.value)

    if (guessCount === 1) {
        lastguesses.textContent = 'Твои догадки: ';
    }


    lastguesses.textContent += `${userGuess} `;



    if (userGuess === randomNumber) {
        result.textContent = 'Правильно!'
        guessField.style.backgroundColor = '#83ec83db';
        lastguesses.textContent = '';
        gameOver()
    }

    if (userGuess !== randomNumber) {
        result.textContent = 'Непрвильно';
        if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Число слишком большое';
        } else {
            lowOrHi.textContent = 'Число слишком маленькое';
        }

        guessField.style.backgroundColor = '#ec8383db';

        guessCount += 1;
    }

    if (guessCount === 10 && userGuess !== randomNumber) {
        lastguesses.textContent = '';
        lastguesses.style.fontWeight = "900"
        lowOrHi.textContent = 'Попробуй еще';
        gameOver()
    }  
}
const gameOver = () => {
    guessSumbit.setAttribute('disabled','disabled');
    guessField.setAttribute('disabled','disabled');
    lowOrHi.textContent = ''
    lowOrHi.insertAdjacentElement("afterend", resetBtn);
    if (guessField.style.backgroundColor === 'rgba(131, 236, 131, 0.86)') {
        winSpin()
    }
}
const winSpin = () => {
    document.querySelector('.gameBack').style.rotate = '360deg';
}
guessSumbit.onclick = checkGuess

guessField.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        checkGuess()
    }
})
