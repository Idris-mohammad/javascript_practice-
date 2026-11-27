const computerHands=["rock", "paper", "scissors"];
let display=document.getElementById("display");
let show=document.getElementById("show");   
const shoot = (hand) => {
    let randNo = Math.floor(Math.random() * 3);
    let computerHand = computerHands[randNo];
    show.innerHTML=`Computer chose: ${computerHand}`;
    if (hand === computerHand) {
        display.innerHTML="Draw";
    } else if (hand === "rock" && computerHand === "scissors" || hand === "paper" && computerHand === "rock" || hand === "scissors" && computerHand === "paper") {
        display.innerHTML="you won";
    } else {
        display.innerHTML="Computer won";
    }
} 