const router = require('express').Router();
const { User, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  User.findAll({
      // be sure to include its associated Product data
        include: [
          {
            model: Product,
            attributes: ['id', 'product_name', 'price', 'stock', 'candy_box'],
          },
        ]
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  User.findOne({
      where: {
        id: req.params.id
      },
        // be sure to include its associated Product data
          include: [
            {
              model: Product,
              attributes: ['id', 'product_name', 'price', 'stock', 'candy_box'],
              include: [
                {
                  model: Category,
                  attributes: ['id', 'category_name'],
                }
              ]
            }
          ]
    })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new tag
  User.create({
    first_name: req.body.first_name,
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  User.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
