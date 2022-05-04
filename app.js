const express = require('express');
const path = require('path');

const publicPath = path.resolve(__dirname,'./public')

const app = express();

app.use(express.static(publicPath));

app.get('/', (req,res) => {
    res.send("Hola, este es el proyecto final de digital :)");
});

app.listen(8000, () =>
    console.log('Levantando un servidor con Express')
    )