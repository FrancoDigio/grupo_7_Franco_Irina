const morgan = require("morgan")
const express = require('express');
const logger = require('morgan');
const path = require('path');
const methodOverride =  require('method-override'); 
const multer = require('multer');
const passport = require('passport');
const session = require('express-session');
var cookieParser = require('cookie-parser');
const {body} = require("express-validator")

// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser("Mi ultra hiper secreto"))



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.filename + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage })

app.use(session({
  secret: 'Helártico',
  resave: true,
  saveUninitialized: true,
  }));

app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas


// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************
const mainRouter = require('./routes/main'); // Rutas main
const productsRouter = require('./routes/productos'); // Rutas /products
const usuarioRouter = require('./routes/usuario'); 
const adminRouter = require('./routes/admin'); 
const saboresRouter = require('./routes/sabores'); 
const pedidosRouter = require('./routes/pedidos');


app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/administrador', adminRouter);
app.use('/usuario', usuarioRouter);
app.use('/sabores', saboresRouter);
app.use('/pedidos', pedidosRouter);





// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// ************ exports app - dont'touch ************
module.exports = app;

