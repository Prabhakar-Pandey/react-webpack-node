var express = require('express');
var bodyParser = require('body-parser');


app = express();
var http = require('http');
app.set('port', (process.env.PORT || 3000));
app.use(express.static('public'));
app.use(bodyParser.json());


//app.use('/js', express.static(__dirname + '/build'));

var engines = require('consolidate');

app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
var webpackMiddleware = require("webpack-dev-middleware");
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

app.use(webpackMiddleware(webpack(require('./webpack.config.js')), {
    noInfo: false,
    quiet: false,
    // lazy: true,
    publicPath: "/js/",
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    }

}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

var server = http.createServer(app).listen(app.get('port'), function() {
    console.log('I am running on Port' + app.get('port'));
});
