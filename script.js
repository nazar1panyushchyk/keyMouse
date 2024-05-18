const startGameButton = document.querySelector('.start-game');
const textFieldSuggestedKey = document.querySelector('.suggested-key');
const textFiledResult = document.querySelector('.result');
const resetGameButton = document.querySelector('.reset-game')

const keys = ['q', '3', '9', 'n', '+', 'G', 't', 'v', 'w', 'c'];
let currentKeyIndex = 0;

function getRandomIndex(index) {
    return Math.floor(Math.random() * index)
}

function handleStartClick() {
    setInterval(() => {
        console.log('interval');
        currentKeyIndex = getRandomIndex(keys.length)
        console.log(keys[currentKeyIndex]);
        textFieldSuggestedKey.textContent = keys[currentKeyIndex];
    }, 3000)
}

startGameButton.addEventListener('click', handleStartClick)