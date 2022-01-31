//Create express app
const express = require('express'); //import express
const app = express(); //create express app
const port = process.env.PORT || 8000;

//get end point
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});



//Listen on port 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});