var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

var mongoDB = 'mongodb://localhost/NodeProject';

mongoose.connect(mongoDB, function (err, err) {

    if (err) {

        console.log('Error connecting to MongoDB' + err);

    }
    else {

        console.log('Connected to MongoDB' + mongoDB);

    }
});