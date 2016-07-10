// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

/************
 * DATABASE *
 ************/

var db = require('./models');

/************
 * PROFILE DATA*
 ************/

var profile_data = {
    name: "Alison Kenney",
    github_link: "https://github.com/alisonkenney",
    current_location: "Denver, Colorado",
    family_members: [
          { name: "David Kenney", relationship: "father" },
          { name: "Kathy Kenney", relationship: "mother" },
          { name: "Ryan Kenney", relationship: "brother" },
          { name: "Daniel Kenney", relationship: "brother" }
        ],
    pets: [
          { name: "Tucker", type: "kitty", age: 1 },
          { name: "Gracie", type: "dog", age: 7 },
        ]
};

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/****************
 * HTML Endpoints *
 *****************/

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/********************
 * JSON API Endpoints *
 ********************/

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: false, 
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/alisonkenney/express-personal-api/documentation/myREADME.md",
    base_url: "https://guarded-dusk-23148.herokuapp.com/", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "My profile information"},
      {method: "POST", path: "/api/places_traveled", description: "Describes places I have traveled -E.g. Create a new place traveled"},
      {method: "PUT", path: "/api/places_traveled/:city", description: "Update a place I have traveled"},
      {method: "DELETE", path: "/api/places_traveled/:id", description: "Delete a place I have traveled"},
    ]
  });
});

// GET ALL PROFILE INFORMATION
app.get('/api/profile', function (req, res) {
      res.json(profile_data);
});

// GET ALL PLACES
app.get('/api/places_traveled', function(req, res){
  db.Place.find(function(err, places){
    if(err){ return console.log("error :", err);}
    res.json(places);
  });
});

//CREATE A NEW PLACE
// create new place
app.post('/api/places_traveled', function (req, res) {
  // create new place
  var newPlace;
  console.log(req.body);
  newPlace = new db.Place({
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    liked: req.body.liked
  });
    // save newPlace to database
    newPlace.save(function(err, place){
      if (err) {
        return console.log("save error: " + err);
      }
      // send back the place
      res.json(place); 
    });     
});

//UPDATE A PLACE
app.put('/api/places_traveled/:city', function api_placesUpdate(req, res) {
 //Identify City and Change
 var placeCity = req.params.city;
 var change = req.body;
 //Find Database City
 db.Place.findOne({city: placeCity}, function(err, foundPlace){
     if (err) {
       return console.log("error adding place: " + err);
     } 
     // Update DB Place
     if(change.city !== undefined){
       foundPlace.city = change.city;
     } 
     if (change.state !== undefined){
       foundPlace.state = change.state;
     } 
     if (change.country !== undefined){
       foundPlace.country = change.country;
     } 
     if (change.liked !== undefined){
       foundPlace.liked = change.liked;
     } 
     //Save Place to Database
     foundPlace.save(function(err, foundPlace) {
       if (err) {
         return console.log("save error: " + err);
       }
       res.json(foundPlace);
     });
   });
});

//DELETE A PLACE
app.delete('/api/places_traveled/:id', function (req, res) {
  // get plae Id from url params (`req.params`)
  var placeId = req.params.id;
  // find the index of the place we want to remove
  db.Place.findOneAndRemove({ _id: placeId }, function (err, deletedPlace) {
    res.json(deletedPlace);
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
