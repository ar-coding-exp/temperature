console.log("Functions");

    let firstName = "David";
    let lastName = "Emery";

//concatenation
console.log("Hello, " + firstName + " " + lastName + ", welcome");
console.log(`Hello ${firstName} ${lastName} ${1+1}, welcome`);


function sayHello(){
    console.log("Hello Cohort 59");
}

sayHello();
sayHello();
sayHello();
sayHello();

function greet(name){
    console.log(`Hello ${name}, welcome!`);
}

greet("Tim");
greet("Alex");

function greet2(name1,name2){
    console.log(`Hello ${name1} and ${name2}, welcome!`);
}

greet2("John","Larry");
greet2("Susan","Nani");

function doubleNumber(number1){
console.log(`The number ${number1} doubled equals ${number1*2}`);

    let total=number1*2;

console.log(`So, the total will be ${total}.`);
}

doubleNumber(3);