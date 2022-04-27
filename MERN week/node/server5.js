let refHTTP = require('http')
let refUrl = require('url')

let requestDetails
function homePage(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<h1><center> Click any number</h1>")
    for(let i=1;i<=10; i++) {
        response.write(`<a href='http://localhost:4005/printing?num=${i}'> ${i} </a> <br>`)
    }
    response.end()
}
function printingPage(request, response){
    let data=requestDetails.query
    response.writeHead(200, {'Content-Type': 'text/html'});
    let T=parseInt(data.num)
    response.write(`<h1><center> Times Table of ${T}</h1>`)
    for(let i=1; i<=10; i++){
        response.write(` ${T} x ${i} = ${T*i} <br>`)
    }
    response.end()
}

let f = function (request, response) {

    let requestDetails = refUrl.parse(request.url, true)
    let data = requestDetails.query
    console.log(requestDetails.pathname);
    console.log(requestDetails.query.num);

    if (requestDetails.pathname == "/") {

        response.write("<h1> <center> Click any Number </center> </h1>")
        for (let i = 1; i <= 10; i++) {


            response.write(`<a href='http://localhost:4005/printing?num=${i}'> ${i} </a> <br>`)
        }
        response.end()

    }
    if (requestDetails.pathname == "/printing") {
        let T = parseInt(data.num)
        response.write(`<h1> <center> Times Table of ${T} </h1>`)
        for (let i = 1; i <= 10; i++) {
            response.write(` ${T} x ${i} = ${T * i} <br>`)
        }
        response.end()
    }
}

let server = refHTTP.createServer(f)
server.listen(4005)