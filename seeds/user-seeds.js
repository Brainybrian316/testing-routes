// Modules required
const User = require("../models/User");

// variable to hold all the user data
const userData = [
  {
    first_name: "Willie",
    last_name: "Wonka",
    email: "Willie@example.com",
    password: "password123",
    address: "1445 West Norwood Avenue",
    city: "Itasca",
    state: "Illinois",
    zipCode: "60143",
    candyId: 1
  },
  {
    first_name: "Jolly",
    last_name: "Blanchers",
    email: "Jolly@example.com",
    password: "password123",
    address: "123 Ranchers Road",
    city: "Orlando",
    state: "Florida",
    zipCode: "32836",
    candyId: 2
  },
   {
    first_name: "Pixy",
    last_name: "Dust",
    email: "Pixy@example.com",
    password: "password123",
    address: "456 Stix Road",
    city: "Orlando",
    state: "Florida",
    zipCode: "32801",

  },
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
