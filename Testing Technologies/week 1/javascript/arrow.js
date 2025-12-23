
//Arrow function for greet
console.log("arrow function for greet")

let greet = name => "hello my name is " + name
console.log(greet("John"))
console.log(greet("James"))

//Convert is even function to arrow
console.log("Convert is even to arrow function")

const isEven = num => num % 2 === 0;
console.log(isEven(4))

//Convert counter function to arrow
console.log("Convert counter function to arrow")

const counter = count => {
    if (count > 100){
        count = 0;
    }
    else{
        count ++
    }
    return(count)
}
console.log(counter(55))

//Convert greet and show age function to arrow
console.log("Convert greet and show age function to arrow")

const nameAge = (name, age) => "hello " + name + " you are aged " + age;

console.log(nameAge("Dee", 100));

//Create arrow for printing function
console.log("Create arrow for printing function")

printOnly = () => {
console.log("printing");
}
printOnly()

//Create arrow function for sum
console.log("Create arrow function for sum")

const sum = (a, b) => a + b;
console.log(sum(5, 9))
