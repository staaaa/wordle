var winS = new Audio('sounds/win.mp3');
var loseS = new Audio('sounds/lose.mp3');

var oneCorrectS = new Audio('sounds/onecorrect.mp3');
var noCorrectS = new Audio('sounds/noCorrect.mp3');

function playWin()
{
    winS.play();
}
function playLose()
{
    loseS.play();
}

function playOneCorrect()
{
    oneCorrectS.play();
}
function playNoCorrect()
{
    noCorrectS.play();
}