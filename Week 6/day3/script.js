`use strict`

for ( let a =1; a<=100; a++) {
    if (a % 5 == 0 && a % 3 == 0 ) {
        console.log(`FizzBuzz`);
    }
    else if (a % 3 == 0) {
        console.log(`Fizz`);
    }
    else if (a % 5 == 0) {
        console.log(`Buzz`);
    }
    else {
        console.log(a);
    }
}

puts (a%3 == 0) ? ((a%5 == 0) ? "FizzBuzz" : "Buzz") : ((a%5 == 0) ? "Fizz" : a)
