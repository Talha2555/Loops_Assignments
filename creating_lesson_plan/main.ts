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


let myWork :{name:string,status:boolean}[]=[]

for (let i=0;i<=10;i++){
    let obj1 ={
        name:"Lesson 1 "+ i,
        status:i% 2 ===0 ? true : false
    };
   
myWork.push(obj1)
}
console.log(myWork);

