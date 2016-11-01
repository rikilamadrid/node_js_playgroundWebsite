//require express
var express = require('express');
var path = require('path');

//create our router object
var router = express.Router();

// simple logger for this router's requests
// all requests to this router will first hit this middleware
/*
router.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});
*/

//route for home page
router.get('/', function(req, res){
    //res.send("hello Lamadrid");
    res.render('pages/home');
});

//route for about page
router.get('/about', function(req, res){
    //res.send('hey, i am the about page.');
    var users = [
            { name: 'Rick', email: 'rick@rick.com', avatar: 'http://66.media.tumblr.com/f5ae2efd0ead6217745a54f81ddad9a3/tumblr_ns476ghtTM1uphguko1_1280.png'},
            { name: 'Abradolf Lincler', email: 'abralinc@rick.com', avatar: 'http://66.media.tumblr.com/c5c4742c8a114134ab7b32673f321244/tumblr_nygcyr1reD1ummdc1o1_500.png'},
            { name: 'Morty', email: 'morty@rick.com', avatar: 'https://s-media-cache-ak0.pinimg.com/564x/4e/dd/85/4edd8574c68e3d85ad7f080d17fd88d0.jpg'}
    ];

    res.render('pages/about', { users: users });
});

//route for contact page
router.get('/contact', function(req, res){
    res.render('pages/contact');
});
router.post('/contact', function(req, res){
    res.send('thank for the schmeckles, ' + req.body.name + '! We are tryyying!!');
});

//export our router
module.exports = router;
