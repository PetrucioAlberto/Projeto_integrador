var express = require('express');
var app = express();
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

let logUser = require('./midllewares/log');
const bodyParser = require('body-parser');
const PORT = 3000
const session = require('express-session');
const multer = require('multer');
const api = require('./routes/apiRouter');
const db = require('./models/index');






//DB

const logDB = require('./midllewares/logDB');




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
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public/assets')));
app.use(logUser)

app.use(session({
  secret: 'projetointegrador',
  resave: true,
  saveUninitialized: true
}));
app.use(logDB)





//rotas e app.use//
// rota api

const apiRouter = require('./routes/apiRouter');
app.use('/api', apiRouter);

////////////////////////////////////////
//MAIN

const mainRouter = require('./routes/mainRouter');
app.use('/', mainRouter);
/////////////////////////

//USER
let userRouter = require('./routes/userRouter');
app.use('/usuarios', userRouter);

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
app.use('/produtos', productsRouter);



//////////////////////////
app.use((req, res) => {
  res.status(404).render('404-page.ejs');
})






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