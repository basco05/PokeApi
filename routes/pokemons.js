
var express = require('express');
var router = express();
var _ = require('underscore');
var handleError;
var async = require('async');
var http = require('http');

/* GET pokemons listing. */

router.route('/')
    // get all the bears (accessed at GET http://localhost:8080/api/bears)
    router.get('/', function(req, result) {

       //result.send(JSON.stringify("{'name' : 'test'}")); 
       var optionsget = {
    host : 'pokeapi.co', // here only the domain name
    // (no http/https !)
    port : 80,
    path : '/api/v2/pokemon/?limit=251', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};
 
console.info('Options prepared:');
console.info(optionsget);
console.info('Do the GET call');
 
// do the GET request
var reqGet = http.request(optionsget, function(res) {
    console.log("statusCode: ", res.statusCode);

    // uncomment it for header details
  console.log("headers: ", res.headers);
    var body = '';
 

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var Response = JSON.parse(body);
        result.send(Response);
    });
 
});
 
reqGet.end();
reqGet.on('error', function(e) {
    console.error(e);
});    
          	
});


module.exports = function (mongoose, errCallback){
	console.log('Initializing pokemon routing module');
	pokemon = mongoose.model('pokemon');
	handleError = errCallback;
	return router;
};
