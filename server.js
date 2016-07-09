// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

//var db = require('./models');

/************
 * OBJECTS *
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

var places_traveled = [
    {
    _id: 1,
    city: "Cincinnati, Ohio",
    state: "Ohio",
    country: "USA",
    liked: true
    },
    {
    _id: 2,
    city: "San Diego",
    state: "California",
    country: "USA",
    liked: true
    },
    {
    _id: 3,
    city: "Cabo San Lucas",
    state: "Baja California Sur",
    country: "Mexico",
    liked: true
    },                            
  {
    _id: 4,
    city: "Mobile",
    state: "Alabama",
    country: "USA",
    liked: false
    },
    {
    _id: 5,
    city: "Nashville",
    state: "Tennessee",
    country: "USA",
    liked: true
    },
    {
    _id: 6,
    city: "Santa Rosa Beach",
    state: "Florida",
    country: "USA",
    liked: true
    },
    {
    _id: 7,
    city: "Seattle",
    state: "Washington",
    country: "USA",
    liked: true
    },
    {
    _id: 8,
    city: "Whitefish",
    state: "Montana",
    country: "USA",
    liked: true
    },
    {
    _id: 9,
    city: "Petoskey",
    state: "Michigan",
    country: "USA",
    liked: true
    },
    ];

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

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
      {method: "POST", path: "/api/places-traveled", description: "Describes places I have traveled -E.g. Create a new place traveled"}
    ]
  });
});

// GET ALL PROFILE INFORMATION
app.get('/api/profile', function (req, res) {
      res.json(profile_data);
});

//GET PLACES TRAVELED
app.get('/api/places_traveled', function (req, res) {
      res.json(places_traveled);
});

//RETURN SINGLE PLACE WITH SPECIFIC ID
app.get('/api/places_traveled/:id', function show(req, res) {
   var placeId = req.params.id;
   for (var i=0; i < places_traveled.length; i++){
      if(placeId == places_traveled[i]._id) {
          res.json(places_traveled[i]); 
      }
   }
 
});

//ADD PLACE TO DATABASE AND RESPOND WITH NEW PLACE
app.post('/api/places_traveled', function create(req, res) {
   var newPlace = req.body;
   newPlace._id = places_traveled.length + 1;
   places_traveled.push(newPlace);
   res.json(newPlace);
});


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
