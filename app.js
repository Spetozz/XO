const reset = document.querySelector("#reset");
const gameOver = document.querySelector("#gameOver");
let score1 = document.querySelector("#score1");
let score2 = document.querySelector("#score2");
let count1 = 0;
let count2 = 0;
let isPlay = true
const win = []
const f = []
    f[1] = document.querySelector("#f1");
    f[2] = document.querySelector("#f2");
    f[3] = document.querySelector("#f3");
    f[4] = document.querySelector("#f4");
    f[5] = document.querySelector("#f5");
    f[6] = document.querySelector("#f6");
    f[7] = document.querySelector("#f7");
    f[8] = document.querySelector("#f8");
    f[9] = document.querySelector("#f9");
num1 = num2 = num3 = num4 = num5 = num6 = num7 = num8 = num9 = 0
let move = 0
gameOver.addEventListener("click", isGameOver)
function isGameOver () {
    reboot()
    newGame()
}
let i = 0
f[1].addEventListener("click", function () {i = 1; xo()})
f[2].addEventListener("click", function () {i = 2; xo()})
f[3].addEventListener("click", function () {i = 3; xo()})
f[4].addEventListener("click", function () {i = 4; xo()})
f[5].addEventListener("click", function () {i = 5; xo()})
f[6].addEventListener("click", function () {i = 6; xo()})
f[7].addEventListener("click", function () {i = 7; xo()})
f[8].addEventListener("click", function () {i = 8; xo()})
f[9].addEventListener("click", function () {i = 9; xo()})
function xo () {
    if (isPlay && win[i]!=='A' && win[i]!=='B') {
        if (move % 2 === 0) {
            f[i].textContent = "X"
            win[i] = "A";
        }
        else {
            f[i].textContent = "O"
            win[i] = "B";
        }
        isWin()
        move += 1
    }
}
function isWin () {
    if ((win[1]==="A" && win[2]==="A" && win[3]==="A") || (win[1]==="A" && win[4]==="A" && win[7]==="A") || (win[7]==="A" && win[8]==="A" && win[9]==="A") || (win[3]==="A" && win[6]==="A" && win[9]==="A") || (win[2]==="A" && win[5]==="A" && win[8]==="A") || (win[4]==="A" && win[5]==="A" && win[6]==="A") || (win[3]==="A" && win[5]==="A" && win[7]==="A") || (win[1]==="A" && win[5]==="A" && win[9]==="A")) {
        count1 +=1;
        score1.textContent = count1;
        score1.classList.add('winner')
        score2.classList.add('looser')
        stop();
    }
    else if ((win[1]==="B" && win[2]==="B" && win[3]==="B") || (win[1]==="B" && win[4]==="B" && win[7]==="B") || (win[7]==="B" && win[8]==="B" && win[9]==="B") || (win[3]==="B" && win[6]==="B" && win[9]==="B") || (win[2]==="B" && win[5]==="B" && win[8]==="B") || (win[4]==="B" && win[5]==="B" && win[6]==="B") || (win[3]==="B" && win[5]==="B" && win[7]==="B") || (win[1]==="B" && win[5]==="B" && win[9]==="B")) {
        count2 +=1;
        score2.textContent = count2;
        score2.classList.add('winner');
        score1.classList.add('looser');
        stop();
    }
}
function reboot () {
    for (let j=1; j<=9; j++) {
        win[j]=0;
        f[j].textContent = "";
        score1.classList.remove('winner','looser');
        score2.classList.remove('winner','looser');
        isPlay = true;
    }
}
function newGame () {
    count1 = 0;
    score1.textContent = count1;
    count2 = 0;
    score2.textContent = count2;
}
function stop () {
    isPlay = false
}
reset.addEventListener("click", reboot);