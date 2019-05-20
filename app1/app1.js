const http =require('http');
const fs=require('fs');
const host="127.0.0.1";
const port =3050;


const text=(req,res)=>
{
    res.statusCode=200;
    res.setHeader("Content-Type","text/plain");
    res.end("Hello Ahmad Alhourani\n");
}

function route (page,res){
    fs.readFile(page,(err,data)=>{
        res.setHeader("Content-type","text/html")
        res.statusCode=200;
        res.write(data);
        res.end();
        
      });
}
const html_page=(req,res)=>{
    page=req.url;
    switch (page){
        case '/':
            route("index.html",res);
            break;

        case '/about':
            route("about.html",res);
            break;
        case '/contact':
            route("contact.html",res);
            break;
        default:
        route("index.html",res);
        break;

    }
   
}
const server=http.createServer(html_page);

server.listen(port,host,()=>{
    // console.log('server is running at  http://${host}:${port}');
    console.log(`Server running at http://${host}:${port}/`);
});