var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var ProfileSchema = new Schema({
	name: String,
	github_link: String,
	current_location: String,
	family_members: [{name: String, relationship: String}],
	pets: [{name: String, type: String, age: Number}]
});

var PlacesTraveled = mongoose.model('Places Traveled', PlacesTraveledSchema);

module.exports = PlacesTraveled;

