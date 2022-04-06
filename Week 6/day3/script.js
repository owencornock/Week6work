'use strict'

// for ( let a =1; a<=100; a++) {
//     if (a % 5 == 0 && a % 3 == 0 ) {
//         console.log(`FizzBuzz`);
//     }
//     else if (a % 3 == 0) {
//         console.log(`Fizz`);
//     }
//     else if (a % 5 == 0) {
//         console.log(`Buzz`);
//     }
//     else {
//         console.log(a);
//     }
// }

//SCOPE

/*
    there are two types of scope
    Local and Global
*/

// function test() {
//     let x = 'foo'
//     if (x == 'foo') {
//         let y = 'boo'
//     }
//     console.log(x);

//     console.log(y);
// }

// test();

// function doSomething() {
//     console.log(a);
//     console.log(foo());
//     let a = 1;
//     function foo() {
//       return 2;
//     }
//   }
//   doSomething();

//DOM 

//document object model

/* Page
    HTML
        head
            metadata
        body
            headers
            paras
            divs
*/

import * as DOM from './dom.js';

let str = "hello";

// DOM.textButon.onclick = () => DOM.textOutput.innerHTML = `${str}` ;

let addToList = str => {
    let child = document.createElement(`li`);
    child.innerHTML = str;
    DOM.textOutput.appendChild(child);
}

// DOM.textButon.onclick = () => DOM.textOutput.innerHTML = DOM.textInput.value;

// DOM.textButon.onclick = () => addToList(DOM.textInput.value);

// let newHead = document.createElement(`h1`);
// let newText = document.createTextNode("Big Boy Head");

// DOM.newHead.appendChild(newText);
// DOM.document.body.appendChild(newHead);

// let btn = document.querySelector('button');

// DOM.btn.onclick = () => addEventListener('click',foo);

let ele = document.querySelector("h1");
ele.style.color = "red";

let paras = document.querySelectorAll('p');
for(let p of paras){
    p.style.colour = 'blue';
}

let em = document.createElement('em');
let strong = document.querySelector('strong');
let div = document.querySelector('div');
em.textContent = "Replaced!"; 
div.replaceChild(em,strong);