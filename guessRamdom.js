let max = prompt("Enter max value: ");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the ramdom number: ");

while(true){
    if(guess == "quit"){
        console.log("you are quit");
        break;
    }
    if(Number(guess) === random){
        console.log("congrats you guess the right random number is ",random);
        break;
    }else if(guess < random){
        guess = prompt("Your guess was too small, please try again");
    }else{
        guess = prompt("you guess was too big, Please try again");
    }
}