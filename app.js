const express = require('express');
const path = require('path');

const publicPath = path.resolve(__dirname,'./public')

const app = express();

app.use(express.static(publicPath));

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('home')
})


app.get('/sabores', (req, res) => {
    res.render('sabores')
})

app.get('/productos', (req, res) => {
    res.render('productos')
})

app.get('/usuario', (req, res) => {
    res.render('usuario')
})

app.get('/elegir-sabores', (req, res) => {
    res.render('elegir-sabores')
})

app.get('/pedidos', (req, res) => {
    res.render('pedidos')
})




app.listen(8000, () =>
    console.log('Levantando un servidor con Express')
    )