const randomNumber = Math.floor(Math.random() * 10) + 1;
const guessButton = document.getElementById("submit");
const reloadButton = document.getElementById("re");
const userGuessInput = document.getElementById("guess");
const message = document.getElementById("result");
const numberRecord = document.getElementById("numberRecord");
const timeRecord = document.getElementById("timeRecord");
let time = 0;
const guessRecord=[];

guessButton.addEventListener("click", function () {
    const userGuess = parseInt(userGuessInput.value);
    time++;

    if (userGuess === randomNumber) {
        message.textContent = '答對了！你猜了' + time + '次';
        guessButton.disabled = true;
        userGuessInput.disabled = true;
    } else if (userGuess > 10) {
        message.textContent = "超出數字範圍";
    } else if (userGuess < randomNumber) {
        message.textContent = "再大一點";
    } else {
        message.textContent = "再小一點";
    }

    guessRecord.push(userGuess);
    numberRecord.textContent = "猜過的數字: " + guessRecord.join(" ");
    timeRecord.textContent = '你已經猜了' + time + '次';
});

reloadButton.addEventListener("click", function () {
    location.reload();
});

