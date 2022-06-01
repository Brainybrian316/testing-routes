// Modules required
const Candy = require('../models/Candy');


// variable to hold all the candy data
const candyData = [
    // expects key value pairs (candy_id)
    {
        candyDecade: "70s",
        userId: 1,

    },
    {
        candyDecade: '80s',
        userId: 2,
  
    },
    {
        candyDecade: '90s',
        userId: 3,

    },

];

///variable to hold all the candy for each user  in the candyData array
const seedCandy = () => Candy.bulkCreate(candyData);

module.exports = seedCandy;