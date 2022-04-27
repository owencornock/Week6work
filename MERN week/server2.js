let refHTTP=require('http')
let refURL=require('url')

let f=function(request,response){
    // if(request.url=="/"){
    //     console.log("Welcome to Home PAge")
    //     response.write("Welcome to Home PAge")
    // }
    // if(request.url=="/trainings"){
    //     console.log("we Provide JAva Training")
    //     response.write("1. JAva")   
    //     response.write("2. Php")   
    //     response.write("3. C Sharp")   
    //     }
    // if(request.url=="/services"){
    //     console.log("we provide trainings,degrees,software development")
    //     response.write("we provide trainings,degrees,software development")
    // }
    // response.end()

    console.log(request.url);
    console.log(refUrl.parse());
}
let server=refHTTP.createServer(f)
server.listen(4005)