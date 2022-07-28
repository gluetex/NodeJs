const { render } = require('ejs');
var user = require('../models/user');


module.exports.index = function (req, res) {
    res.render('login');
}


module.exports.signupGet = function (req, res) {
    res.render('signup');
}

module.exports.signupPost = function (req, res) {

    var Cryptr=require('cryptr');
    cryptr=new Cryptr('key');
    var password=cryptr.encrypt(req.body.password);

    var newUser = new user({
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        password: password

    });

    newUser.save(function (err) {
        if (err) console.log(err);
       
    });

    console.log(newUser);
    res.render('signup');
}


module.exports.indexPost = function (req, res) {
   
    res.render('signin');
   
}

