const express = require('express');


const app = express();


app.get('/', (req, res)=> res.send('Whats up bro! what are you doing'))

app.listen(2000, ()=>console.log("Listening to port "))