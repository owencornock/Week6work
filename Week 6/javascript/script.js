// Use strict and console

/* 
    use strict:
    forces us to write secure javascript
    stops us using protected words, making global variables etc.
*/

`use strict`

// let myVar =1;


// console.log(`Hello World`);

// console.info(`this is info`);

// console.warn(`this is a warning`);

// console.error(`This is a error`);

// console.log(`%c` + `some text`, `color:black; background-color:white; font-size: 30px; padding: 15px;`);

// console.log(`First Name`);

// console.warn();(`Second Name`);

// console.info(`Where are you from`);

// console.error(`And your star sign`);


// console.log(`%c` + `My Message`, `font-style:bold; color:orange; font-family:fantasy; background-color:black; padding:10px;`);

//`use strict`

/*
    in js data types are dynamic and mutable
    decided at runtime
    stored as text
*/

/*
    we declare vairables iwth 
    let
    const
    var
*/

// let variableOne = `hello`;
// const variableTwo = 4;
// var oldVaraible = true;

/*
    in js there are two types of types primative and objectss

    obnjects have one datatype which is object
    primatives have everything else
    boolean, number, string, symbol, null, bigint, undefined
*/

// objects

/* 
    they are a collection of properties and mutable
    made up of key value pairs
*/

// let myObject = {
//     key : `value`,
//     anotherKey : 12345
// }

// console.log(myObject);

//string concatenation

// let a;
// let b = "12345";
// let c = 12344;
// let d = true;
// let e = {a:"JavaScript"};

// typeof(a);
// typeof(b);
// typeof(c);
// typeof(d);
// typeof(e);

// let totalMoney = 4000;
// let moneyPaidSoFar = 2348;
// let totalLeftToPay = totalMoney - moneyPaidSoFar;

// console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}`);

//`use strict`

//ASI
/*
    Automatic semi coloon insertion

    JS automatically inserts semi colons at the endof a line
*/

//`use strict`

// let a = 100;

// // while(a <= 200) {
// //         a++;
// //         console.log(`a = ${a}`);
// //     }

// for (a = 100; a <= 200; a++) {
//     console.log(`a = ${a}`);
// }

// // while (a <= 200) {
// //     if (a % 2 == 0) {
// //         console.log(`-`);
// //     } else {
// //         console.log(`*`);
// //     }
// //     a++
// // }

// for (a = 100; a <= 200; a++) {
//     if (a % 2 == 0) {
//         console.log(`-`);
//     } else {
//         console.log(`*`);
//     }
// }

// for (let i = 0; i < 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(j);
//     }
// }

// let now = new Date();
// let day = now.getDay();

// switch (day) {
//     case 0:
//         console.log(`It's Sunday`);
//         break;
//     case 6:
//         console.log(`It's Saturday`);
//         break;
//     case 1:
//         console.log(`It's Monday`);
//         break;
//     case 2:
//         console.log(`It's Tuesday`);
//         break;
//     case 3:
//         console.log(`It's a Wednesday`);
//         break;
//     case 4:
//         console.log(`It's a Thursday`);
//         break;
//     case 5:
//         console.log(`It's a weekday`);
//         break;
//     case 7:
//         console.log(`It's a Friday`)
//         break;
//     default:
//         console.log(`Excuse me?`);
//         break;
// }

// let strictA = true;
// let strictB = 1;

// console.log(strictA == strictB);
// console.log(strictA === strictB);

// let age = 66;

// if (age >= 18 && age <= 65) {
//     console.log(`Correct Age`);
// } else if (age < 18) {
//     console.log(`Underage`);
// } else {
//     console.log(`wrong age`);
// }

// let result = age >= 50 ? `50 or over` : `Under 50`;
// console.log(result);

// let darthVader = {
//     allegiance: `empire`,
//     weapon: `lightsabre`,
//     sith: true
// };
// console.log(darthVader);

// console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
// console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
// console.log(`Darth Vader is a sith? ${darthVader.sith}`);
// console.log(`Darth Vader is a Jedi? ${!darthVader.sith}`);

// let myArray = [`hello`, `everyone`];

// console.log(myArray.length);
// myArray.push("Goodbye");
// console.log(myArray.length);
// myArray.shift();

// for (let item of myArray) {
//     console.log(item);
// }

function sub(num1, num2) {
    return num1 - num2;
}

console.log(sub(10,5));

function welcome(name, age, gender) {
    return console.log(`My name is ${name}, i am ${age} years old and of gender ${gender}`);
}
welcome("Felix Cited", 20, "Male");

powerUp = (n1, n2) => "power of two numbers " + Math.pow(n1, n2);

console.log(powerUp(2,4));