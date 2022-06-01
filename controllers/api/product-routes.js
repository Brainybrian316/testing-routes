// Added product-routes

const router = require("express").Router();
const { User, Candy, Product } = require("../../models");

// get all products
router.get("/", (req, res) => {
    Product.findAll({
    }).then((dbProductData) => res.json(dbProductData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  });


  module.exports = router;