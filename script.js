// console.log("hello from our first file")

// let star = 3
// console.log(star)

// Conditional Statement we start with If - Statement

// if(1 + 1 === 2){
//     console.log("Maths still works")
// }

// if(1 + 3 == "4"){
//     console.log("Cool testing")
// }

// let userMaths = Math.floor(Math.random() * 4) + 1;

// if(userMaths == 3){
//     console.log("You got the number right")
// }

// The start of else if statement

// const dayOfWeek = 'Saturday';

// if(dayOfWeek === 'Monday'){
//     console.log('I hate M v ondays')
// }
// else if(dayOfWeek === 'Saturday'){
//     console.log('I love Saturdays')
// }

// // The start of the else if nothing else is true

// let rating = -99;

// if(rating === 3){
//     console.log('You are a superstar!');
// }
// else if(rating === 2){
//     console.log('Meets Expectations');
// }
// else if( rating === 1){
//     console.log('Needs Improvement');
// }
// else{
//     console.log('Invalid rating');
// };

// const password = prompt("please enter a new password")

// if(password.length >= 6){
//     if(password.indexOf(' ') === -1){
//         console.log("Good job! No Space!")
//     }
//     else{
//         console.log("Password cannot contain spaces!")
//     }
    
// }
// else{
//     console.log("Password too short")
// }
// Nesting conditional statement conbinig logic


// Logical operator AND &&, the two statement must be true for the equation to be true

// const passWord = prompt("Enter your password");

// if(password.length >= 6 && password.indexOf('')){
//     console.log("Incorrect Format for password")
// } else{
//     console.log("Incorrect Password")
// }

// Logical OR operator || if one side is true, the entire thing is true"

// const age = 100;
// if(age >= 0 && age < 5 || age >= 65){
//     console.log("FREE")
// } else if( age >= 5 && age < 10){
//     console.log("$10")
// } else if(age >= 10 && age < 65){
//     console.log("$20")
// } else{
//     console.log('INVALID AGE!')
// }

//  Logical NOT ! expression returns true if expression is false - it flips the booleaness of the value

// const firstName = prompt("Enter Your FirstName");
// if(!firstName){
//     firstName = prompt("Try Again!!");
// }

//  Switch Statement is another control flow statement that can replace multiple if statements

// const day = 2;
//  switch (day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5: 
//         console.log("Friday");
//         break;
//     default:
//         console.log("I do not know that")

//  }

// JAVASCRIPT ARRAYS START OF THE SECTION

// let arrayOfNumbers = ["one", "two", "three", "four", "five", "six"];
//  arrayOfNumbers[2] = "changed"
//  console.log(arrayOfNumbers)

// Arrays Methods

// Push - add to end of an array

// let movieLine = ['tom', 'nancy']
// movieLine.push('james')
// // You can also multiple line words

// movieLine.push('joshua', 'micheal', 'dude')

// Pop - Remove from the end of the array
// You can also use push and pop together

// movieLine.pop()
// movieLine.pop()

//  Shift- remove from the start of the array

// let newLine = ['maze', 'travel', 'animation', 'edition', 'valery'];

// newLine.shift()
// newLine.shift()
// unshift- add to the start of the array
// newLine.unshift('might', 'glory', 'power')

// // Concatination of an array

// let cats = ['blue', 'kitty']

// let dogs = ['rusty', 'wyatt']

// let joined = cats.concat(dogs)

// Includes check if an array contains a particular words or number

// let checkers = joined.includes('rusty')

// IndexOf checks if for the index numbers of the array

// joined.indexOf('rusty')

// Reverse of an array it changes the array- it reorganises and reordered it and reverses it

// joined.reverse()

// Slice removes some numbers from an array, and when you splice it can include the start and not the stop and can take two
// arguement the start and stop

// let colors = ['red', 'blue', 'yello', 'orange', 'indigo', 'lemon'];
// colors.slice(1)
// colors.slice(3, 5)

// Splice it changes the contents of an array by removing or replacing existing and or adding new element in place and destructive to the original array
// colors.splice(2,1)

// sorting of arrays and sort collect functions



// Nexted Arrays we can store arrays inside another errays

// const gameBoard = [["o", "x", null], ["o", null, "x"], ["o", "x", null]]

// Javascript Object Literals

// const kitchenSink = {

// favNum: 8898777,
// isFunny: true,
// colors: 'Blue',
// flavors: ["grape", "Mango", "cherry"]
// };

// Updating Data inside an object

// const midTerms = {
//     danielle: 96, 
//     thomas: 78,

// }
// midTerms.danielle
// midTerms.thomas

// changing the object in an Object

// midTerms.danielle = 80;

// midTerms["thomas"] = 50;

//  Adding Properties to an object

// midTerms.esther = 99;
// midTerms.solo = 77;

// console.log(midTerms)

//  Nesting an array inside an object and nesting an object inside an object


// Loops in Javascript

// For loops

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// };

// for(let i = 0; i <= 20; i += 2){
//     console.log(i);
// };

// for(let i = 100; i >= 0; i -= 10){
//     console.log(i)
// }

// Looping over an array

// let arcAnimals = ['lion', 'elephant', 'bird', 'penguin', 'chetha', 'gorilla' ];

// for(let i = 0; i <= arcAnimals.length; i++){
//     console.log(i, arcAnimals[i])
// }

// Nested Loops of arrays

// let africCount = [['Uk', 'Austria', 'Germany'], ['ghana', 'Nigeria', 'Kenya'], ['India', 'China', 'Japan']];

// for(let i = 0; i < africCount.length; i++){
//     const row = africCount[i];
//     console.log(`Row ${ i + 1}`)
//     for(let j = 0; j <= row.length; j++){
//         console.log(row[j])
//     }
// }

// While loops

// let count = 0;
// while(count < 10){
//     count++
//     console.log(count)
// };

// const Secret = "Macarroni";

// let guess = prompt("Enter the secret code");

// while(guess !== Secret){
//     guess = prompt("Enter the secret code");
// }
// console.log("Congrats you got it correctly")


 // Javascript Function 

//  function singSong(){
//     console.log("Hello Everyone")
//  }
//  singSong()

//  Functions Accepts an arguement

// function greet(firstName){
//     console.log(`firstname is: ${firstName}`)
// }
 
// function greet(firstName, lastName){
//     console.log(`Hey there, ${firstName}!`)
// }

// greet('clooney', 'george')

// Function that accept multiple arguement

// function repeat(str, numTimes){
//     let result = '';
//     for (let i = 0; i < numTimes; i++){
//         result += str
//     }
//     console.log(result)
// }

// The Return Key word

// function add(x, y){
//     if(typeof x !== 'number' || typeof y !== 'number'){
//         return false;
//     }
//     return x + y;
// }


//  function HelloPeople(){
//     console.log("I need help")
//  }
//  HelloPeople()

//  function GreetMe(name){
//     console.log(`Hi ${name}`)
//  }
//  GreetMe("Joshua")

// Function Expression

// const add = function (x,y){
//     return x + y;
// }
// add(4,8)

// const square = function (x,y){
//     let powr = Math.pow(x, 2)
//     let hey = Math.pow(y, 2)
//     console.log(`${hey}, ${powr}`)

    
// }

// Higher order function

// Every method is a fucntion
// const myMath = {
//     PI: 3.23443,
//     square: function(num){
//         return num * 2;
//     },
//     cube: function(change){
//         return change ** 2
//     }
// }

// Javascript Keyword Called this


// Javascript keyword called try and catch

// Javascript Call back and array functions

// Using foreach call back function to loop throught an array

// const number = [1, 2, 3, 4,5, 10, 40, 50]

// number.forEach(function(e){
//     if(e % 2 == 0){
//         console.log(e)
//     }
// })

// Map creates an array with teh results of calling a callback on every element in the array


// let innitialName = ["joshua", "gad", "samuel", "moo", "godwin", "success", "mine"]

// const finalName = innitialName.map(function(c){
//     return c.toUpperCase()
// })

// const nomber = number.map(function(d){
//     return d.toString()
// })


const fullNames = [{first: 'Albus', last: 'Dumbledore'},
                 {first: 'Harry', last: 'Potter'},
                  {first: 'Hermione', last: 'Granger'},
                   {first: 'Ron', last: 'Weasley'}, 
                   {first: 'Rubeus', last: 'Hagrid'},
                    {first: 'Minerva', last: 'McGonagall'},
                     {first: 'Severus', last: 'Snape'}];

const firstName = fullNames.map(function(f){
    return f.first
})

// Arrow functions

