const { Subscription } = require('../models');

const subscriptionData = [
  {
    candybox_id: 1,
    users_id: 6,
  },
  {
    candybox_id: 1,
    users_id: 7,
  },
  {
    candybox_id: 1,
    users_id: 8,
  },
  {
    candybox_id: 2,
    users_id: 6,
  },
  {
    candybox_id: 3,
    users_id: 1,
  },
  {
    candybox_id: 3,
    users_id: 3,
  },
  {
    candybox_id: 3,
    users_id: 4,
  },
  {
    candybox_id: 3,
    users_id: 5,
  },
  {
    candybox_id: 4,
    users_id: 1,
  },
  {
    candybox_id: 4,
    users_id: 2,
  },
  {
    candybox_id: 4,
    users_id: 8,
  },
  {
    candybox_id: 5,
    users_id: 3,
  },
];

const seedSubscription = () => Subscription.bulkCreate(subscriptionData);

module.exports = seedSubscription;
