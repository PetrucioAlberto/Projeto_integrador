var express = require('express');
var app = express();
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const PORT = 3000




// require das rotAS

// var usersRouter = require('./src/routes/usersRouter');
// var partialsRouter = require('./src/routes/partialsRouter');
// var productsRouter = require('./src/routes/productsRouter');

//controllers

let mainController = require('../src/controllers/mainController');

//port
app.listen(PORT, () => {
  console.log("Server is running on port:" + PORT);
  // console.log(path.resolve('/public/assets/stylesheets'));
})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public/assets')));
// app.use('/img',express.static(path.join(__dirname, 'public/assets/images')));
// app.use('/js',express.static(path.join(__dirname, 'public/assets/javascripts')));
// app.use('/css',express.static(path.join(__dirname, 'public/assets/stylesheets')));





//rotas e app.use

const mainRouter = require('../src/routes/mainRouter');
app.use('/', mainRouter);
const userRouter = require('./routes/userRouter');
app.use('/cadastroLogin', userRouter);
const partialsRouter = require('./routes/partialsRouter');
app.use('/partials/footer', partialsRouter);
app.use('/partials/head', partialsRouter);
app.use('/partials/header', partialsRouter);
const productsRouter = require('./routes/productsRouter');
app.use('/produtoInterno', productsRouter);


// app.use('/src', mainRouter);
// app.use('/header', partialsRouter);
// app.use('/footer', partialsRouter);
// app.use('/cadastroLogin', usersRouter);
// app.use('/produtoInterno', productsRouter);
// app.use('/', mainController)


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;