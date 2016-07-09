// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

/************
 * DATA *
 ************/

var places_traveled = [
    {
    "city": "Cincinnati, Ohio",
    "state": "Ohio",
    "country": "USA",
    "liked": true
    },
    {
    "city": "San Diego",
    "state": "California",
    "country": "USA",
    "liked": true
    },
    {
    "city": "Cabo San Lucas",
    "state": "Baja California Sur",
    "country": "Mexico",
    "liked": true
    },                            
  {
    "city": "Mobile",
    "state": "Alabama",
    "country": "USA",
    "liked": false
    },
    {
    "city": "Nashville",
    "state": "Tennessee",
    "country": "USA",
    "liked": true
    },
    {
    "city": "Santa Rosa Beach",
    "state": "Florida",
    "country": "USA",
    "liked": true
    },
    {
    "city": "Seattle",
    "state": "Washington",
    "country": "USA",
    "liked": true
    },
    {
    "city": "Whitefish",
    "state": "Montana",
    "country": "USA",
    "liked": true
    },
    {
    "city": "Petoskey",
    "state": "Michigan",
    "country": "USA",
    "liked": true
    },
    ];

db.Place.remove({}, function(err, places) {
	if (err) {
		console.log(err);
	}else {
		console.log("removed places");

		//create new place
		db.Place.create(places_traveled, function(err, places) {
			if (err) {
				return console.log(err);
			}
			console.log("Created: ", + places.length + "places");
			process.exit();
		});
	}

});



   
