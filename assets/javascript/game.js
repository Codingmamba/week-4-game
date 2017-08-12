$(document).ready(function() {

var winCounter = 0;
var lossesCounter = 0;

/*
var redGem = Math.floor((Math.random() * 12) + 1);
var blueGem = Math.floor((Math.random() * 12) + 1);
var yellowGem = Math.floor((Math.random() * 12) + 1);
var greenGem = Math.floor((Math.random() * 12) + 1);
*/

var totalScore = 0;

var targetNumber = Math.floor((Math.random() * 102) + 19);


function startGame() {

// displays the targer number in a green background
$("#number-to-guess").html(targetNumber);  


var cyristalClicks = {
    redGem: Math.floor((Math.random() * 12) + 1),
    blueGem: Math.floor((Math.random() * 12) + 1),
    greenGem: Math.floor((Math.random() * 12) + 1),
    yellowGem: Math.floor((Math.random() * 12) + 1)
};

$(".cyristal-click").on("click", function () {

    $("#total-score").html(cyristalClicks);

});

$("#blue-gem).on("click", function() {

    $("#total-score").html(blueGem);

 $("#green-gem").on("click", function() {

    $("#total-score").html(greenGem);    

$("#red-gem").on("click", function() {

    $("#total-score").html(redGem); 
    
$("#yellow-gem").on("click", function() {

    $("#total-score").html(yellowGem);   

     if (targetNumber === totalScore) {
        $("#wins").html(winCounter);
        alert("You win!");
        winCounter++;
    } else if (totalScore >= targetNumber) {
        $("#losses").html(lossesCounter);
        alert("You have lose!, Please try again");
        lossesCounter++;
    }

}); // yellow function

}); // red function

}); // green function

}); //blue function


}
} //startGame function


startGame();


}); //.ready function