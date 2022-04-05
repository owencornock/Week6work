// Use strict and console

/* 
    use strict:
    forces us to write secure javascript
    stops us using protected words, making global variables etc.
*/

    // `use strict`

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

`use strict`

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

let variableOne = `hello`;
const variableTwo = 4;
var oldVaraible = true;

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

let myObject = {
    key : `value`,
    anotherKey : 12345
}

console.log(myObject);

//string concatenation

let a;
let b = "12345";
let c = 12344;
let d = true;
let e = {a:"JavaScript"};

typeof(a);
typeof(b);
typeof(c);
typeof(d);
typeof(e);

let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = totalMoney - moneyPaidSoFar;

console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}`);