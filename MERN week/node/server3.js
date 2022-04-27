let refHTTP = require('http')
let refUrl = require('url')

let f = function (request, response) {


    let requestDetails = refUrl.parse(request.url, true)
    let data = requestDetails.query

    if (requestDetails.pathname == "/add") {
        let result = parseInt(data.no1) + parseInt(data.no2)
        console.log("The result of Addition is: " + result);
    }
    if (requestDetails.pathname == "/subtract") {
        let result = parseInt(data.no1) - parseInt(data.no2)
        console.log("The result of subtract is: " + result);
    }
    if (requestDetails.pathname == "/divide") {
        let result = parseInt(data.no1) / parseInt(data.no2)
        console.log("The result of divide is: " + result);
    }
    if (requestDetails.pathname == "/multiply") {
        let result = parseInt(data.no1) * parseInt(data.no2)
        console.log("The result of multiply is: " + result);
    }

}
let server = refHTTP.createServer(f)
server.listen(4005)