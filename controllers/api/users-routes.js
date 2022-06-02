const router = require('express').Router();
const { Users, CandyBox, Subscription } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Users.findAll({
      // be sure to include its associated Product data
        include: [
          {
            model: CandyBox,
            attributes: ['id', 'decade', 'price', 'stock',],
          }
        ]
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Users.findOne({
      where: {
        id: req.params.id
      },
        // be sure to include its associated Product data
          include: [
            {
              model: CandyBox,
              attributes: ['id', 'decade', 'price', 'stock',],
            }
          ]
    })
    .then(dbTagData => {
      if (!dbTagData) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json(dbTagData);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new tag
  Users.create({
    first_name: req.body.first_name
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Users.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(dbTagData => {
      if (!dbTagData[0]) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json(dbTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Users.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    res.json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
