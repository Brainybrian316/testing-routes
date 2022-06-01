//Modules require -- Added product-seeds file
const Product = require('../models/Product');

// const Candy70sData = ['Twix', 'Snickers', 'M&Ms', 'Milky Way', 'Hershey', 'Kit Kat',]
// const candy70sData = Candy70sData[Math.floor(Math.random() * Candy70sData.length)];

// const Candy80sData = ['hello', '', 'my', 'name', 'is', 'candy',]
// const candy80sData = Candy80sData[Math.floor(Math.random() * Candy80sData.length)];

// const Candy90sData = ['Tdfa', 'yoyo', 'poopoo', 'meemee', 'hshs', 'dhfdak',]
// const candy90sData = Candy90sData[Math.floor(Math.random() * Candy90sData.length)];


const productData = [
    //expect key value pairs candy_id
    {
        product_name: 'Everlasting Gobstoppers',
        
    },
    {
        product_name: 'Fun Dip',
      
    },
    {
        product_name: 'Pop Rocks',
       
    },
    {
        product_name: 'Cow Tales',
 
    },
    {
        product_name: 'Push Pops',
        
    },
    {
        product_name: 'Big League Chew',
        
    },
    {
        product_name: 'Astro Pop',
        
    },
    {
        product_name: 'Bubble Tape',
        
    },
    {
        product_name: 'Mega Jawbreaker',
        
    }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;

