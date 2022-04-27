// let f=function message() {
//     console.log("Hello");
// }
// let f2=funciton() {
//     console.log("This is me");
// }

// function doSomething(fun) {
//     fun()
// }

// doSomething(f2)

// function owen(day) {
//     let f2
//     if(day==1){
//         f=function(){
//             for(let i=0;i<=0;i++){
//                 console.log(i);
//             }
//         }
//     }
//     if(day==2){
//         f=function() {
//             console.log("Take Backup");
//         }
//     }
//     return f
// }

// let Fun=owen(2)

// Fun()

// function add(A,B) {
//     console.log("The result of the addition is " +(A+B));
// }

// add(2,5)

let functions=[]

functions.push(function(){console.log("Hello");})
functions.push(function(){
    for (let i=0; i<10; i++){
        console.log(i);
    }
}
)
for(let i=0;i<functions.length;i++) {
    functions[i]();
}