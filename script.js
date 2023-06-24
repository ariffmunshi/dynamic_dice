// create function when button clicked to roll dice

function rollDice() {
// step 1: get number from input (n)
    let number = document.getElementById("dice-number").value;
// step 2: generate random whole number from 1 to n
    let result = Math.ceil(Math.random() * number);
// step 3: display results on screen
    document.getElementById("result").innerHTML = result;
}