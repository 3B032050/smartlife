const express = require("express")
const app =express();
const port = process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.type('text/plain');
    res.send('Smart Life');
});

const server = app.listen(port,()=>console.log('smartlife app listening on port ${port}!'));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;