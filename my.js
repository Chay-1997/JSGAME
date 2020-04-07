
var gameplaying=0;
var roundScore=0;
var score=[0,0];
var activePlayer=0;

document.getElementById("Roll").addEventListener("click",function(){

var dice=Math.floor(Math.random()*6)+1;

var diceDome=document.querySelector(".dice");
diceDome.src="dice-"+dice+".png";

if(dice!==1){
roundScore+=dice;
document.getElementById("current-"+activePlayer+"-score").textContent=roundScore;
}
else{
nextPlayer();
}

});

function nextPlayer()
{
    activePlayer===0? activePlayer=1 : activePlayer=0;
    roundScore=0;

    document.getElementById("current-0-score").textContent="0";
    document.getElementById("current-1-score").textContent="0";

    document.querySelector(".FirstPlayer").classList.toggle("active");
    document.querySelector(".SecondPlayer").classList.toggle("active");

}

document.querySelector("#Hold").addEventListener("click",function()
{
score[activePlayer]+=roundScore;

document.getElementById("Score-"+activePlayer).textContent=score[activePlayer];

if(score[activePlayer]>=20)
{
    document.getElementById("player-"+activePlayer).textContent="Winner";
}




});

















