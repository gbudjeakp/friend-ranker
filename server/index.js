//Create express app
const express = require('express'); //import express
const app = express(); //create express app


//get end point
app.get('/home', (req, res) => {
    res.send('<h1>Hello World</h1>');
});



//Listen on port 3000
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});