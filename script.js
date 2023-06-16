//Prompt player for an input
let randomNo1 = prompt("Enter Number From 1 -6");
console.log(randomNo1);
let randomDice1 = "assets/" + "dice" + randomNo1 + ".png";
let player1 = document.querySelectorAll("img")[0];
player1.setAttribute("src", randomDice1);


if(randomNo1 > 6){
    alert("Out of range, Please choose again");
    randomNo1 = prompt("Enter Number From 1 -6");
    let randomDice1 = "assets/" + "dice" + randomNo1 + ".png";
    let player1 = document.querySelectorAll("img")[0];
    player1.setAttribute("src", randomDice1);
}



//Generating random dice image for player 2;
let randomNo2 = Math.floor(Math.random() * 6) + 1;
    let randomDice2 = "assets/" + "dice" + randomNo2 + ".png";
    let player2 = document.querySelectorAll("img")[1];
    player2.setAttribute("src", randomDice2);

//Comparing dice value of player1 and player2 to get the winner 
if (randomNo1 > randomNo2){
    let results = document.querySelector("h1");
    results.innerHTML = "You Win";
}else if(randomNo2 > randomNo1){
    let results = document.querySelector("h1");
    results.innerHTML = "Computer Wins";
}else {
    let results = document.querySelector("h1");
    results.innerHTML = "This is a draw";
}
