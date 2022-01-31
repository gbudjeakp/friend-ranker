//Create express app
const express = require('express'); //import express
const app = express(); //create express app
const port = 8000 || process.env.PORT;

//get end point
app.get('/home', (req, res) => {
    res.send('<h1>Hello World</h1>');
});



//Listen on port 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});