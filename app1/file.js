const fs =require('fs')

fs.readFile("names.txt","utf8",(err,data)=>{
    if (err) throw err;
    console.log(data);
})