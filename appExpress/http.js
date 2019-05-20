const http =require('http')

const port=3000
const host="127.0.0.1"
const server=http.createServer((req,res)=>{
res.setHeader("Content-Type","plain/text");
res.statusCode=200;
res.write("hello Ahmad")
res.end;
});
server.listen(port);
console.log("run server....")
