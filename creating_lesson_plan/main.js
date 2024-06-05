//Loops Assignment no 1 : Creating  a Lesson Plan
//Steps to follow:
//1. Create a blank array: Start by setting up an empty array named myWork that will hold
// objects.
// 2. Use a loop to create lessons: Write a for loop that runs from 1 to 10. In each iteration:
// o Create an object representing a lesson.
// o Each lesson should have a name property, which is a string like "Lesson 1",
// "Lesson 2", etc.
// o Each lesson should also have a status property, which alternates between true
// and false. This means "Lesson 1" will have status: true, "Lesson 2" will have
// status: false, and so on.
// 3. Add the lesson to the array: Push each lesson object into the myWork array.
// 4. Print the result: Finally, log the myWork array to the console to see the list of lessons.
var myWork = [];
for (var i_1 = 0; i_1 <= 10; i_1++) {
    var obj1 = {
        name: "Lesson 1 " + i_1,
        status: i_1 % 2 === 0 ? true : false
    };
    myWork.push(obj1);
}
console.log(myWork);
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
var maxValue = 10;
var randomNo = Math.floor(Math.random() * 10 + 1);
console.log("Random number is :".concat(randomNo));
var trackStatus = false;
var guess = [0.1, 1, 3, 4, 5, 6, 7, 21];
var i = 0;
while (i < guess.length) {
    if (guess[i] === randomNo) {
        console.log(" Congratulations you guess a correct no ".concat(guess[i], " You won!"));
        trackStatus = true;
        break;
    }
    else if (guess[i] > randomNo) {
        console.log("Your guess is too high ".concat(guess[i]));
    }
    else if (guess[i] < randomNo) {
        console.log("Your guess was too low ".concat(guess[i]));
    }
    i++;
}
if (!randomNo) {
    console.log("You guess a wrong number the random number is ".concat(guess[i]));
}
