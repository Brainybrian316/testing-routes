const { Candies } = require('../models');

const candiesData = [
    {
      candy_name: 'Andes Mints',
   
    },
    {
      candy_name: 'Appleheads',
   
    },
    {
      candy_name: 'Astronaut Ice Cream Sandwich',
  
    },
    {
      candy_name: 'Blow Pops',
     
    },
    {
      candy_name: 'BuckEyes',
    
    },
    {
      candy_name: 'BarNone',
  
    },
    {
      candy_name: 'Nerds',
     
    },
    {
      candy_name: 'Spree',
      
    },
    {
      candy_name: 'Skor',
    
    },
    {
      candy_name: 'Cow Tales',
  
    },
    {
      candy_name: 'Baby Bottle Pops',
   
    },
    {
      candy_name: 'Color Your Mouth Gumballs',
    
    },
    {
      candy_name: 'Creme Savers',
    
 
    },
    {
      candy_name: 'Gummi Hot Dog',
    
    },
    {
      candy_name: 'Nerds Rope',

    },
  ];

const seedCandies = () => Candies.bulkCreate(candiesData);

module.exports = seedCandies;
