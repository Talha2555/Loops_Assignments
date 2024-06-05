//Loops Assignment no :2  Guessing Game (Using while loop )
// Steps to Follow:
// 1. Set a maximum value: Create a variable to store the maximum value for the number
// guessing game.
// 2. Generate a random number: Use Math.random() and Math.floor() to generate a
// random number between 1 and the maximum value. Log this value to the console for
// development purposes.
// 3. Track the guess status: Create a variable to track whether the user's guess is correct. Set
// it to false initially.
// 4. Simulate user guesses: Use an array to store a series of predefined guesses.
// 5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the
// correct guess is made.

let maxValue =10 
let randomNo =Math.floor(Math.random ()*10 +1)
console.log(`Random number is :${randomNo}`);

let trackStatus =false;
let guess =[0.1,1,3,4,5,6,7,21]
let i =0 
while(i<guess.length){
    if( guess[i]===randomNo){
console.log(` Congratulations you guess a correct no ${guess[i]} You won!`);
trackStatus = true;
break;
    }
else if (guess [i] > randomNo){
    console.log(`Your guess is too high ${guess[i]}`);
    
} 
else if (guess[i]<randomNo){
console.log(`Your guess was too low ${guess[i]}`);

}
i++
}
if (!trackStatus){
    console.log(`You guess a wrong number the random number is ${guess[i]}`);
    
}