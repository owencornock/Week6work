'use strict'

// FETCH API

// How we implement HTTP requests

// CREATE
// READ
// UPDATE
// DELETE



// our DOM
const input = document.getElementById(`input`);
const button = document.getElementById(`button`);
const createBtn = document.getElementById(`create`);
const output = document.getElementById(`output`);

button.onclick = () => read(input.value);
createBtn.onclick = () => create(input.value);

/*
    https://reqres.in/
	https://catfact.ninja/fact
	https://www.boredapi.com/api/activity
	http://api.open-notify.org/iss-now.json // ISS POSITION
	http://api.open-notify.org/astros.json // No. OF PEOPLE IN SPACE
  https://emojihub.herokuapp.com/api/random // Random emoji
*/

// let read = INTERFACE => {

//     // Promises
//     // 'then' takes two option arguments
//     // a callback for success 
//     // a callback for failure

//     fetch(INTERFACE)
//         .then(response => {
//             if (response.status !== 200) {
//                 console.error(`status: ${response.status}`);
//                 return;
//             } else {
//                 response.json()
//                     .then(data => {
//                         output.innerHTML = JSON.stringify(data);
//                     })
//             }
//         }).catch(err => {
//             console.error(err);
//         });

// }

let read = () => {

    axios
        .post(`https://reqres.in/api/users?page=2`)
        .then(response => {
            output.innerHTML = JSON.stringify(response.data);
        }).catch(err => {
            console.error(err);
        });

}

// https://reqres.in/api/users

let create = URL => {
    
    axios
        .post(URL, {
            first_name : "cameron",
            email : "cguthrie@qa.com"
        })
        .then(response => {
            output.innerHTML = JSON.stringify(response);
        }).catch(err => {
            console.error(err);
        });

}