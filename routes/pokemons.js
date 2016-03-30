
var express = require('express');
var router = express();
var _ = require('underscore');
var handleError;
var async = require('async');
var Pokemon = require('mongoose').model('Pokemon');

/* GET pokemons listing. */

router.route('/pokemon')
    // get all the bears (accessed at GET http://localhost:8080/api/bears)
    .get('/', function(req, res) {
    	pokemon.find(function(err, pokemon) {
            if (err)
                res.send(err);

            res.json(pokemon);
        });

module.exports = function (mongoose, errCallback){
	console.log('Initializing pokemon routing module');
	pokemon = mongoose.model('pokemon');
	handleError = errCallback;
	return router;
};

