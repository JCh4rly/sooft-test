var express = require('express');
var router = express.Router();
var ctrlRestaurant = require('../controllers/restaurant.controller');

router.route('/')
  .get(ctrlRestaurant.list)
  .post(ctrlRestaurant.insert)

router.route('/:kor')
  .get(ctrlRestaurant.listByKindOfRestaurant)  

module.exports = router;