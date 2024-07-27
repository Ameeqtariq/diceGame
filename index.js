var randomNumber1=Math.floor(Math.random() * 6) + 1;
var randomDiceImage= "dice"+randomNumber1+".png";
var randomImageSource="images/"+randomDiceImage;// /images/dice1.png-dice6.png
var random=document.querySelectorAll("img")[0];
random.setAttribute("src",randomImageSource);

var randomNumber2=Math.floor(Math.random() * 6) + 1;
var randomDiceImage= "dice"+randomNumber2+".png";
var randomImageSource="images/"+randomDiceImage;// /images/dice1.png-dice6.png
document.querySelector(".img2").setAttribute("src",randomImageSource);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins 🍿";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins 🍕"
}
else{
    document.querySelector("h1").innerHTML="It's a draw! 🤝"
}