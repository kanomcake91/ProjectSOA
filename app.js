var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var confirmedRouter = require('./routes/confirmed');
var deathRouter = require('./routes/death');
var recoveredRouter = require('./routes/recovered');
var graphConfirmed = require('./routes/topConfirmed');
var graphDeath = require('./routes/topDeath');
var graphRecovered = require('./routes/topRecovered')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/confirmed', confirmedRouter);
app.use('/death', deathRouter);
app.use('/recovered', recoveredRouter);
app.use('/graphConfirmed', graphConfirmed);
app.use('/graphDeath', graphDeath);
app.use('/graphRecovered', graphRecovered);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;