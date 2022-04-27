// let physics=70
// let chemistry=20
// let total=physics+chemistry
// let per=total*100/200

// console.log("The result is:" +total);

// if (per>=60) {
//     console.log("You have passed the exam");
// } else {
//     console.log("You have failed the exam");
// }

// let number=78

// console.log(number);

// console.log(number%10+parseInt(number/10))

// let number1=367
// console.log(number1%100 + number1%10 + parseInt(number1/10));

let bill=367
let paid=550
let balance=paid-bill

if(balance>=50) {
    let n50=parseInt(balance/50)
    console.log("50 =" +n50);
    balance=balance%50
}
if(balance>=20) {
    let n20=parseInt(balance/20)
    console.log("20 =" +n20);
    balance=balance%20
}
if(balance>=10) {
    let n10=parseInt(balance/10)
    console.log("10 =" +n10);
    balance=balance%10
}
if(balance>=5) {
    let n5=parseInt(balance/5)
    console.log("5 =" +n5);
    balance=balance%5
}
if(balance>=2) {
    let n2=parseInt(balance/2)
    console.log("2 =" +n2);
    balance=balance%2
}
if(balance>=1) {
    let n1=parseInt(balance/1)
    console.log("1 =" +n1);
    balance=balance%1
}

