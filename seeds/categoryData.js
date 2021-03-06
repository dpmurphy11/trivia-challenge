const { Categories } = require('../models');

const seedData = [
  {
    "api_id": 9,
    "category_name": "General Knowledge"
},
{
    "api_id": 10,
    "category_name": "Entertainment: Books"
},
{
    "api_id": 11,
    "category_name": "Entertainment: Film"
},
{
    "api_id": 12,
    "category_name": "Entertainment: Music"
},
{
    "api_id": 13,
    "category_name": "Entertainment: Musicals & Theatres",
    "active": false
},
{
    "api_id": 14,
    "category_name": "Entertainment: Television"
},
{
    "api_id": 15,
    "category_name": "Entertainment: Video Games"
},
{
    "api_id": 16,
    "category_name": "Entertainment: Board Games"
},
{
    "api_id": 17,
    "category_name": "Science & Nature"
},
{
    "api_id": 18,
    "category_name": "Science: Computers"
},
{
    "api_id": 19,
    "category_name": "Science: Mathematics",
    "active": false
},
{
    "api_id": 20,
    "category_name": "Mythology"
},
{
    "api_id": 21,
    "category_name": "Sports"
},
{
    "api_id": 22,
    "category_name": "Geography"
},
{
    "api_id": 23,
    "category_name": "History"
},
{
    "api_id": 24,
    "category_name": "Politics"
},
{
    "api_id": 25,
    "category_name": "Art",
    "active": false
},
{
    "api_id": 26,
    "category_name": "Celebrities"
},
{
    "api_id": 27,
    "category_name": "Animals"
},
{
    "api_id": 28,
    "category_name": "Vehicles"
},
{
    "api_id": 29,
    "category_name": "Entertainment: Comics"
},
{
    "api_id": 30,
    "category_name": "Science: Gadgets",
    "active": false
},
{
    "api_id": 31,
    "category_name": "Entertainment: Japanese Anime & Manga"
},
{
    "api_id": 32,
    "category_name": "Entertainment: Cartoon & Animations"
}
];

const seedCategories = () => Categories.bulkCreate(seedData);

module.exports = seedCategories;
