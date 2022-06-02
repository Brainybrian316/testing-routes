const router = require('express').Router();
const candiesRoutes = require('./candies-routes');
const candyBoxRoutes = require('./candybox-routes');
const usersRoutes = require('./users-routes');

router.use('/candies', candiesRoutes);
router.use('/candybox', candyBoxRoutes);
router.use('/users', usersRoutes);

module.exports = router;
