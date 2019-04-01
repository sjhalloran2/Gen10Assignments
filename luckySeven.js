function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["luckySevenForm"].elements.length;
        loopCounter++) {
        if (document.forms["luckySevenForm"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["luckySevenForm"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}

function resetForm() {
    clearErrors();
    document.forms["luckySevenForm"]["StartingBet"].value = "0.00";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Play";
    document.forms["luckySevenForm"]["StartingBet"].focus();
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function runGame() {
    clearErrors();
    var startingBet = document.forms["luckySevenForm"]["StartingBet"].value;
    if (startingBet == "" || isNaN(startingBet) || startingBet <= 0) {
        alert("Starting bet must be above $0 and a valid number");
        document.forms["luckySevenForm"]["startingBet"].parentElement.className = "form-group has-error";
        document.forms["luckySevenForm"]["StartingBet"].focus();
        return false;
    }
   var ogStartingBet = startingBet
   var highestMoney = startingBet;
   var totalRolls = 0;
   var highRoll;
   while(startingBet>0){
     var die1 = rollDice();
     var die2 = rollDice();
     var possibleSeven = die1 + die2;
     if(possibleSeven == 7){
       startingBet = startingBet + 4;
     }
     else{
       startingBet = startingBet - 1;
     }
     if(highestMoney < startingBet){
       highestMoney = startingBet
       highRoll = totalRolls;
     }
     totalRolls++;

   }
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Play Again!";
   document.getElementById("startingBetResult").innerText = ogStartingBet;
   document.getElementById("TotalRolls").innerText = totalRolls;
   document.getElementById("HighestAmount").innerText = highestMoney;
   if(highestMoney == ogStartingBet){
     document.getElementById("HighestAmountRollCount").innerText = "You didnt win one hand!";

   }
   else{
   document.getElementById("HighestAmountRollCount").innerText = highRoll;
 }
   // We are returning false so that the form doesn't submit
   // and so that we can see the results
   return false;
}
