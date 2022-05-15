const express = require('express');
const path = require('path');

const publicPath = path.resolve(__dirname,'./public')

const app = express();

app.use(express.static(publicPath));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'));
});

app.get('/sabores', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/sabores.html'));
});

app.get('/productos', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/productos.html'));
});

app.listen(8000, () =>
    console.log('Levantando un servidor con Express')
    )