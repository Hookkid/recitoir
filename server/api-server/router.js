const express = require('express');

const recipeRoute = require('./routes/recipe-items');
const recipeCategoriesRoute = require('./routes/recipe-categories');

const indexRoute = require('./routes/index');

const createPushSubscriptionRoute = require('./routes/push-subscription/create');

module.exports = function (api) {
  let router = express.Router();
  router.get('/recipe/categories', recipeCategoriesRoute(api));
  router.get('/recipe/items', recipeRoute(api));
  
  router.post('/push-subscription', createPushSubscriptionRoute(api));

  router.get('/', indexRoute());
  return router;
}

