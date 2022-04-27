let refHTTP=require('http')

let server=refHTTP.createServer(function(A,B) {
    console.log("hello my friends");
}
)

server.listen(4005)