const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    req,ssend('Hello World !');
})

const port = 3000;
app.listen(port,()=>{
    console.log(`server is running on ${port}`);    
})