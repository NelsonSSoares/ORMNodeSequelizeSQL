const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get('/', (req, res)=>{
    res.status(200).send({message: 'Boas-Vindas à API'})
});

app.listen(port, ()=>{
    console.log(`Server Online at Port: ${port}`);
});

module.exports = app;