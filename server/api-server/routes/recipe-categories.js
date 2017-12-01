module.exports = function (api) {
  const Recipe = api.db.models['recipe'];

  let _cachedResults = null;

  return function (req, res) {
    console.log('APIASDASDF')
    if (_cachedResults) {
      res.json({ data: _cachedResults });
      return Promise.resolve(_cachedResults);
    }
    return Recipe.count({ attributes: ['category'], group: 'category' })
      .then((results) => {
        _cachedResults = results;
        res.json({ data: results });
        return _cachedResults;
      })
      .catch((err) => {
        res.json({ error: `Problem fetching data: ${err}` });
      });
  }
}