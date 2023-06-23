// i will need express 
const express = require('express');
const app = express();

const userRoutes = require('express').Router();

app.use(express.json())

const sendMail = require('./utils/sendMail');


// define my route here
app.post('/sendEmail', (req, res)=> {
    sendMail()
    res.send("Here is my weekly report")
});


const PORT = 5000;
app.listen(PORT, ()=> console.log(`server running on ${PORT}`));







