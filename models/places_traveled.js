var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var PlacesTraveledSchema = new Schema({
	city: String,
	state: String,
	country: String,
	liked: Boolean
});

var PlacesTraveled = mongoose.model('Places Traveled', PlacesTraveledSchema);

module.exports = PlacesTraveled;
