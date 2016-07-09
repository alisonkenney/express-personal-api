JSON API Endpoint           Response JSON
=============               =============
GET /api/profile            {
                              name: “Alison Kenney",
                              github_link: "https://github.com/alisonkenney",
                              current_location: “Denver, Colorado",
                              family_members: [
                                { name: ‘David Kenney', relationship: ‘father' },
                                { name: ‘Kathy Kenney', relationship: ‘mother’ },
                                { name: ‘Ryan Kenney', relationship: ‘brother’ },
                                { name: ‘Daniel Kenney', relationship: ‘brother’ }

                              ],
                               pets: [
                                { name: ’Tucker', type: ‘kitty’, age: 1 },
                                { name: ‘Gracie', type: ‘dog’, age: 7 },
                              ]

                            }

GET /api/places-traveled     [
                             {
                                _id: 1,
                                city: ‘Cincinnati, Ohio',
                                state: ‘Ohio',
                                country: 'USA',
                                liked: true
                             },
                             {
                                _id: 2,
                                City: ’San Diego',
                                State: ‘California',
                                country: ‘USA',
                                liked: true
                             },
                             {
                                _id: 3,
                                City: ’Cabo San Lucas',
                                State: ‘Baja California Sur'
                                country: ‘Mexico',
                                liked: true
                             }

                             {
                                _id: 4,
                                City: ’Mobile',
                                State: ‘Alabama'
                                country: ‘USA',
                                liked: false
                             }
                            ]

GET /api/places-traveled?limit=1   [ { _id: 1, city:’Cincinnati’… } ]

GET /api/places-traveled?country=USA
          [ { _id: 1, city:’Cincinnati..’ }, { _id: 2, city:’San Diego’ }, { _id: 4, city:’Mobile...' } ]

GET /api/places-traveled/2         { _id: 2, city:’San Diego...' }

POST /api/places-traveled          etc
PUT /api/places-traveled/2         etc
DELETE /api/places-traveled/2      etc