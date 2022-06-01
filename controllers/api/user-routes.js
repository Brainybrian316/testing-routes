// file connects to api/index.js
const router = require("express").Router();
const { User, Candy, Product } = require("../../models");



// GET /api/users  *****Testing product 
router.get("/", (req, res) => {
  // access the User model and find all users
  User.findAll({
    // exclude the password from the response
    attributes: {
      exclude: ["password"],
    },
    // include the candy that the user subscribed to
    include: [
      {
        // the model is the table we want to include
        model: Candy,
        // the atribbutes are the columns we want to return for the user that subscribed to the candy
        attributes: ["id", "candyDecade"]
      },
    //   *****THUY added this
      {
        model: Product
      }
    ],
  })
    // send the response back to the client
    .then((dbUserData) => res.json(dbUserData))
    // catch any errors
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// // GET /api/users/1
// router.get("/:id", (req, res) => {
//   // access the User model to find a single user
//   User.findOne({
//     // exclude the password from the response
//     attributes: {
//       exclude: ["password"],
//     },
//     // find the user by id
//     where: {
//       id: req.params.id,
//     },
//     // include the candy that the user subscribed to
//     include: [
//       {
//         // the model is the table we want to include
//         model: Candy,
//         //   the atribbutes are the columns we want to return for the user that subscribed to the candy
//         attributes: ["id", "candyDecade"],
//       },
//     //   *****THUY added this
//       {
//           model: Product
//       }
//     ],
//   })
//     // send the response back to the client
//     .then((dbUserData) => {
//       // if there is no user with the id  we send a 404 status
//       if (!dbUserData) {
//         res.status(404).json({
//           message: "No user found with this id",

//         });
//         return;
//       }
//       // if there is a user with the id we send the user back to the client
//       res.json(dbUserData);
//     })
//     // catch any errors
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.put('/:id', withAuth, (req, res) => {
//     // access the User model to find a single user
//     User.findOne({
//             // find the user by id
//             where: {
//                 id: req.params.id
//             }
//         })
//         // update the user with the new data
//         .then(dbUserData => {
//             // if there is no user with the id  we send a 404 status
//             if (!dbUserData) {
//                 res.status(404).json({
//                     message: 'No user found with this id'
//                 });
//                 return;
//             }
//             // if there is a user with the id we update the user with the new data
//             return dbUserData.update(req.body);
//         })
//         // send the response back to the client
//         .then(dbUserData => res.json(dbUserData))
//         // catch any errors
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });


// // POST /api/users

// router.post("/", (req, res) => {
//   // access the User model to create a new user
//   User.create({
//     // the first_name is the name of the user
//     first_name: req.body.first_name,
//     // the last_name is the last name of the user
//     last_name: req.body.last_name,
//     // the email is the email of the user
//     email: req.body.email,
//     // the password is the password of the user
//     password: req.body.password,
//     // the address is the address the user lives in
//     address: req.body.address,
//     // the city is the city the user lives in
//     city: req.body.city,
//     // the state is the state the user lives in
//     state: req.body.state,
//     // the zip is the zip code of the user
//     zipCode: req.body.zipCode,
//     // *****THUY added this
//     candy_id: req.body.candy_id,
//   })
//    // send the response back to the client
//         .then(dbUserData => {
//             // save the session before sending the response
//             req.session.save(() => {
//                 // set the session user_id to the user id of the user we just created
//                 req.session.id = dbUserData.id;
//                 // set teh session email to the email of the user we just created
//                 req.session.email = dbUserData.email;
//                 // the purpose of session.loggedIn is to check if the user is logged in or not
//                 req.session.loggedIn = true;
//                 // send the user back to the client
//                 res.json(dbUserData);
//             });
//         })
//         // catch any errors
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

 
// // DELETE /api/users/1
// router.delete("/:id", (req, res) => {
//   // access the User model to delete a user
//   User.destroy({
//     // find the user by id
//     where: {
//       // the id is the id of the user we are trying to delete
//       id: req.params.id,
//     },
//   })
//     // send the response back to the client
//     .then((dbUserData) => {
//       // if there is no user with the id we send a 404 status
//       if (!dbUserData) {
//         res.status(404).json({ message: "No user found with this id" });
//         return;
//       }
//       // if there is a user with the id we send the user back to the client
//       res.json(dbUserData);
//     })
//     // catch any errors
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;
