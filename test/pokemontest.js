var request = require('supertest');
var expect = require('chai').expect;
var should = require('chai').should();
require('./index.js'); // which executes 'mongoose.connect()'
var mongoose = require('mongoose');

var app = require('express')();
var calendar = require('../routes/pokemon');
app.use('/', calendar);

function makeRequest(route, statusCode, done){
	request(app)
		.get(route)
		.expect(statusCode)
		.end(function(err, res){
			if(err){ return done(err); }

			done(null, res);
		});
};

console.log(mongoose.connection.readyState);