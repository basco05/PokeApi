var mongoose = require('mongoose');
var Schema = mongoose.Schema;


  var pokemonSchema = new Schema({
      id   : { type: Number, required: true }
    , name     : { type: String}
  });


	/*
	TODO: Validation
	- Title: Verplicht, String
	- PublishDate: Verplicht, Date, voor vandaag
	- Category: Verplicht, String
	- Chapters: Array van JSNON { title, numberOfPages }
	*/

	/*
	TODO: 
	- De benodigde virtuals (Onder andere totalNumberOfPages, opgebouwd uit numberOfPages van chapters)
	- De benodigde extra validation
	- De benodigde static methods
	- De benodigde instance methods
	*/
	var pokemon = mongoose.model('pokemon',pokemonSchema);

module.exports = pokemon;