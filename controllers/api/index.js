const router = require('express').Router();
const candiesRoutes = require('./candies-routes');
const candyBoxRoutes = require('./candybox-routes');
const usersRoutes = require('./users-routes');
const subRoutes = require('./sub-routes');

router.use('/candies', candiesRoutes);
router.use('/candybox', candyBoxRoutes);
router.use('/users', usersRoutes);
router.use('/sub', subRoutes);

module.exports = router;
