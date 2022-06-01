// Modules required
const Candy = require('../models/Candy');


const candyData = [
    {
        candyDecade: '70s',
    },
    {
        candyDecade: '80s',
    },
    {
        candyDecade: '90s',
    }
];

///variable to hold all the candy for each user  in the candyData array
const seedCandy = () => Candy.bulkCreate(candyData);

module.exports = seedCandy;