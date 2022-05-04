const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("Hola, este es el proyecto final de digital :)");
});

app.listen(8000, () =>
    console.log('Levantando un servidor con Express')
    )