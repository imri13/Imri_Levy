//import and init
const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
app.use(express.static(path.join(__dirname, "static")));

//routing
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get('/formHandler', (req, res)=>{
    res.send("Thank you");
});

//set up listen
app.listen(port, ()=> {
    console.log("server is running on port ", port);
});