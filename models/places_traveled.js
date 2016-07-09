var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var PlacesTraveledSchema = new Schema({
	city: String,
	state: String,
	country: String,
	liked: Boolean
});

var Place = mongoose.model('Place', PlacesTraveledSchema);

module.exports = Place;
