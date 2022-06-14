var express = require('express');
var app = express();
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let logUser = require('./midllewares/log');
const PORT = 3000








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
// app.use(logUser)





//rotas e app.use//

//MAIN

const mainRouter = require('./routes/mainRouter');
app.use('/', mainRouter);
/////////////////////////

//USER
let userRouter = require('./routes/userRouter');
app.use('/login', userRouter);

//////////////////////////
//carrinho 
let carrinhoRouter = require('./routes/carrinhoRouter');
app.use('/carrinho', carrinhoRouter);
//Partials

const head = require('./routes/headRouter');
const header = require('./routes/headerRouter');
const footer = require('./routes/footerRouter');
app.use('/partials/footer', footer);
app.use('/partials/head', head);
app.use('/partials/header', header);

//////////////////////////
//Products
const productsRouter = require('./routes/productsRouter');
app.use('/pesquisa', productsRouter);

// const produtoInterno = require('./routes/productsRouter');
// app.use('/produtoInterno', produtoInterno);

//////////////////////////



// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//    set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;