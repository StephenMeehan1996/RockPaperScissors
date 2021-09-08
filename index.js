var comSelects = ["rock","paper","scissors"];
var playerWins = 0;
var comWins = 0;
var gamesPlayed = 0;
var draws = 0;
var playerChoice;
var comChoice;
var gamesToPlay = 0;
var result = 0;

buttonOff();
document.querySelector(".continue").addEventListener("click",function(){
gamesToPlay = document.getElementById("target").value;
document.querySelector(".gameControl").classList.add("hidden");
buttonOn();

});
    for(var i = 1; i < 4; i++){
    
        document.querySelectorAll("button")[i].addEventListener("click",function(){
            playerChoice = this.className;
            var pressed = "." + playerChoice;
            document.querySelector(pressed).classList.add("pressed");
            setTimeout(function(){
                document.querySelector(pressed).classList.remove("pressed");
            },100);
            var randomNum = Math.floor(Math.random(1)*3);
            comChoice = comSelects[randomNum];
            Rules(playerChoice,comChoice,randomNum);
        })
    
    }

function Rules(playerChoice,comChoice,randomNum)

{
            if(playerChoice == "rock" && comChoice == "scissors"){
            playerWins++;
            gamesPlayed++;
            result = 1;
            document.querySelector(".message").innerHTML = "Player Wins"
            
        }

        else if(playerChoice == "scissors" && comChoice == "paper"){
            playerWins++;
            gamesPlayed++;
            result = 1;
            document.querySelector(".message").innerHTML = "Player Wins"
        }
        else if(playerChoice == "paper" && comChoice == "rock"){
            playerWins++;
            gamesPlayed++;
            result = 1;
            document.querySelector(".message").innerHTML = "Player Wins"
        }


        else if(playerChoice == "scissors" && comChoice == "rock"){
            comWins++;
            gamesPlayed++;
            result = 2;
            document.querySelector(".message").innerHTML = "CPU Wins"
        }
        else if(playerChoice == "paper" && comChoice == "scissors"){
            comWins++;
            gamesPlayed++;
            result = 2;
            document.querySelector(".message").innerHTML = "CPU Wins"
        }
        else if(playerChoice == "rock" && comChoice == "paper"){
            comWins++;
            gamesPlayed++;
            result = 2;
            document.querySelector(".message").innerHTML = "CPU Wins"
        }

        else if(playerChoice == comChoice){
            gamesPlayed++;
            draws++;
            result = 3;
            document.querySelector(".message").innerHTML = "Draw"
        }

        document.querySelector(".gamesPlayed").innerHTML ="Games Played: " + gamesPlayed;
        document.querySelector(".playerWins").innerHTML ="Player Wins: " + playerWins;
        document.querySelector(".CPUWins").innerHTML ="CPU Wins: " + comWins;
        document.querySelector(".draws").innerHTML ="Draws: " + draws;

        if(playerWins == gamesToPlay || comWins == gamesToPlay){

            buttonOff();
            endGame();
        }

        winMessage();
        
         setTimeout(() => {
            PicCycle(randomNum);
         }, 600);
         setTimeout(() => {
            createSound(result);
         }, 600);
}

function PicCycle(randomNum)
{
    document.querySelector(".comChooses").innerHTML ="Computer Picks " + comChoice;
    document.querySelector(".image").classList.add("pressed");
    setTimeout(function(){
        document.querySelector(".image").classList.remove("pressed");
    },100);
    document.querySelector(".image").src =  "images/RPS" + randomNum + ".png";
    
}

function winMessage(){
   
    var winMessage =  document.getElementById("winMessage");
    winMessage.classList.add("hidden");
    setTimeout(function(){
        winMessage.classList.remove("hidden");
    },600);
    winMessage.classList.add("pressed");
    setTimeout(function(){
        winMessage.classList.remove("pressed");
    },700);
}

function createSound(result){
    
    if(result == 1){
        var audio = new Audio("sounds/win.wav");
        audio.play();
    }
    else if(result == 2){
        var audio = new Audio("sounds/lose.wav");
        audio.play();
    }
    else if( result == 3){
        var audio = new Audio("sounds/draw.wav");
        audio.play();
    }
}

function endGame(){
            document.querySelector(".gameControl").classList.remove("hidden");
            document.getElementById("target").classList.add("hidden");
            document.querySelector(".gameP").innerHTML = "Final Score:<br><br>Player: " + playerWins + "<br><br>Computer: " + comWins;
            document.querySelector(".continue").innerHTML = "Play Again?";
            document.querySelector(".continue").addEventListener("click", function(){
            location.reload();
    });

}

function buttonOn(){

    for(var i = 0; i < 3; i++)
    {
        document.querySelector("." + comSelects[i]).disabled = false;
    }
}
function buttonOff(){

    for(var i = 0; i < 3; i++)
    {
        document.querySelector("." + comSelects[i]).disabled = true;
    }
}

