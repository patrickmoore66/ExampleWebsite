//Patrick Moore
//CS290:HW5
//2/19/2021

var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');
var session = require('express-session');
var request = require('request');

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 6666);


app.get('/', function(req, res, next){
  var context = {};
  if(!req.session){
      res.render('home', context);
      return
  }
  context = req.session
  context.newsletter = req.session.newsletter.submitted || false;
  res.render('home', context);
});

app.get('/newsletter', function(req, res, next){
  var context = {}

  if(req.body.subscribed=='Submit'){
    res.render('subscribed', context)
} else {
  res.render('unsubscribed', context)
}
});


app.get('/download', function(req, res, next){
  var context = {}

  res.render('download', context)
});

app.get('/faq', function(req, res, next){
  var context = {}

  res.render('faq', context)
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://flip1.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});
