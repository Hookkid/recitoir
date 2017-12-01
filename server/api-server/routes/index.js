module.exports = function () {
  return function (req, res) {
    res.json({
      routes: {
        get: {
          '/recipe/categories': 'recipe category list',
          '/recipe/items': 'recipe item list',
          '/': 'This page'
        },
        put: {
          '/cart/items': 'Update cart contents'
        },
        post: {
          '/order': 'Create an order (check out)',
          '/push-subscription': 'Create WebPush subscription'
        }
      }
    });
  }
}