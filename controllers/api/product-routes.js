const router = require('express').Router();
const { Product, Category, User, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
  // find all products
  Product.findAll({ // be sure to include its  Category and Tag data
    include: [
      {
        model: Category,
        attributes: ['id', 'category_name'],
      },
      {
        model: User,
        attributes: ['id', 'first_name'],
      }
    ]
  })
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one product
router.get('/:id', (req, res) => {
  // find a single product by its `id`
  Product.findOne({
    where: {
      id: req.params.id
    },
      // be sure to include its associated Category and Tag data
      include: [
        {
          model: Category,
          attributes: ['id', 'category_name']
        },
        {
          model: User,
          attributes: ['id', 'first_name']
        }
      ]
        })
        .then(dbProductData => {
          if (!dbProductData) {
            res.status(404).json({ message: 'No product found with this id' });
            return;
          }
          res.json(dbProductData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
  });

// create new product
router.post('/', (req, res) => {
  Product.create({
    product_name: req.body.product_name,
    price: req.body.price,
    stock: req.body.stock,
    candy_box: req.body.candy_box,
    userIds: req.body.user_id
  })
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.userIds.length) {
        const productTagIdArr = req.body.userIds.map((user_id) => {
          return {
            candies: product.id,
            user_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put('/:id', (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // find all associated tags from ProductTag
      return ProductTag.findAll({ where: { candies: req.params.id } });
    })
    .then((productTags) => {
      // get list of current tag_ids
      const productTagIds = productTags.map(({ user_id }) => user_id);
      // create filtered list of new tag_ids
      const newProductTags = req.body.userIds
        .filter((user_id) => !productTagIds.includes(user_id))
        .map((user_id) => {
          return {
            candies: req.params.id,
            user_id,
          };
        });
      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ user_id }) => !req.body.userIds.includes(user_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete one product by its `id` value
  Product.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbProductData => {
    if (!dbProductData) {
      res.status(404).json({ message: 'No product found with this id' });
      return;
    }
    res.json(dbProductData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
