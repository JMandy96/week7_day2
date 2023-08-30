//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
// for loops not necessary, just for the sake of practice. can just directly do the console.log(`favorite pizza is ${person3.pizza[0]}`)
function printFavFoods(){
    for (let k in person3){
        if (k === 'pizza'){
            console.log(`person3's favorite ${k} types are ${person3.pizza[0]} and ${person3.pizza[1]}`)
        } else if (k === 'tacos') {
            console.log(`person3's favorite tacos is just about ${person3.tacos}`)
        }  else if ( k === 'burgers'){
            console.log(`person3's favorite Burger is ${person3.burgers}`)
        }   else if ( k === 'ice_cream') {
            console.log(`person3's favorite ${k}s are ${person3.ice_cream[0]} ${person3.ice_cream[1]} ${person3.ice_cream[2]}`)
        }else if (k === 'shakes') {
            for (let i in person3.shakes[0]) {
                if (i === 'oberwise') {
                    console.log(`person3's favorite shakes from ${i} is ${person3.shakes[0].oberwise}`)
                } else if ( i === 'dunkin') {
                    console.log(`person3's favorite shake from ${i} is ${person3.shakes[0].dunkin}`)
                } else if ( i === 'culvers') {
                    console.log(`it is difficult for person3 to pick a shake from ${i} because they love ${person3.shakes[0].culvers}`)
                } else if (i === 'mcdonalds') {
                    console.log(`unfortunately the ${person3.shakes[0].mcDonalds} from ${i} is only limited to certain times of year, person3 loves them.`)
                } else if (i === 'cupids_candies') {
                    console.log(`from ${i} person3 likes to get the ${person3.shakes[0].cupids_candies}`)
                }
            }
        }
    }
}
printFavFoods()

//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class
class Person{
    constructor(personName,age){
    this.personName= personName
    this.age = age
    }
// Use an arrow to create the printInfo method
    printInfo = () => {
        return `${this.personName} is currently ${this.age}`
    }


// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    birthday = () => {
        this.age += 1
        return `Happy birthday ${this.personName}, you are now ${this.age}`
    }
}
const jakeM = new Person('Jake', 27)
console.log(jakeM.printInfo())
console.log(jakeM.birthday())
const saraM = new Person('Sara', 26)
console.log(saraM.printInfo())
console.log(saraM.birthday())
console.log(saraM.birthday())
// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/

const driverStandings = async () => {
    try{
    const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
    const data = await response.json()
    console.log(data)
    // just to test grabbing a specific item.
    console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.driverId)
    }
    catch {
        console.log('there was an error')
    }
}

driverStandings()


// Codewars # 1 Double Char
/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/

function doubleChar(str) {
    let newstr= ''
    for (let char of str){
      char = char+char
      newstr += char
    }
    return newstr
  }

// this one is not my solution is the best practice on from codewars.
const doubleChar = (str) => str.split("").map(c => c + c).join("");

// codewars # 2 Welcome to the city
/*
Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

['John', 'Smith'], 'Phoenix', 'Arizona'
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
*/
function sayHello(name, city, state) {
    // use constant variable of join names, that way the name variable can take in any number of names in a list
    // then join them together with a space.
    const joinNames = name.join(' ');
    return `Hello, ${joinNames}! Welcome to ${city}, ${state}!`;
  }


// codewars best practice, same thing but skipping making a variable and doing it directly in the return statement.
function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
    }

// codewars #3 Selective fear of numbers (just for fun)
/*
I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisible by 2

Saturday --> 56

Sunday --> 666 or -666

Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)
*/
var AmIAfraid = function(day, num){
    if ( day === 'Monday' && num === 12) {
      return true;
    } else if ( day === 'Tuesday' && num > 95) {
      return true;
    } else if ( day === 'Wednesday' && num === 34){
      return true;
    } else if ( day === 'Thursday' && num === 0){
      return true;
    } else if ( day === 'Friday' && num % 2 === 0) {
      return true;
    } else if ( day === 'Saturday' && num === 56) {
      return true;
      // this statement i needed to wrap the or statement in () to correctly analyze 1 of them, otherwise it returned expected false returned true.
    } else if ( day === 'Sunday' && (num === 666 || num === -666)){
      return true;
    } else {
    return false;
  }
  }

  // best practice

  var AmIAfraid = function(day, num) {
    var preds = {"Sunday":    d => d == 666 || d == -666,
                 "Monday":    d => d == 12,
                 "Tuesday":   d => d > 95,
                 "Wednesday": d => d == 34,
                 "Thursday":  d => d === 0,
                 "Friday":    d => d % 2 === 0,
                 "Saturday":  d => d == 56};
    return preds[day](num);
  }