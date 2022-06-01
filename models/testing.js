
// array of 70s candy objects
const Candy70sData = ['Twix', 'Snickers', 'M&Ms', 'Milky Way', 'Hershey', 'Kit Kat',]
// returns 3 random candies from the array of 70s candy objects
const candy70sData = Candy70sData[Math.floor(Math.random() * Candy70sData.length)];


// function to return 3 random candies from the array of 80s candy objects
const Candy80sData = ['hello', '', 'my', 'name', 'is', 'candy',]
const candy80sData = Candy80sData[Math.floor(Math.random() * Candy80sData.length)];

function randomCandy80s() {
    return candy80sData;
}

console.log(candy80sData);


