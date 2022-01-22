var randomNumber1=Math.floor(Math.random() * 6) + 1; //generate random number b/w 1 &6
var randomDiceImage= "dice" + randomNumber1 + ".png"; // dice1.png-dice6.png
var randomImageSource="images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1=document.querySelectorAll("img")[0]; //selects 1st dice
image1.setAttribute("src",randomImageSource);

var randomNumber2=Math.floor(Math.random() * 6) + 1;
randomImageSource2="images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins 🚩";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}
else{
    document.querySelector("h1").innerHTML="Tie!";
}