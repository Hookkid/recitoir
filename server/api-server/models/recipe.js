let _model = null;
module.exports = function (sequelize, DataTypes) {
  if (!_model) {
    _model = sequelize.define('recipe', {
      name: { type: DataTypes.STRING },
      category: { type: DataTypes.STRING },
      imageUrl: { type: DataTypes.STRING },
      description: { type: DataTypes.STRING }
    }, {
      indexes: [{
        fields: ['category']
      }]
    });
  }
  return _model;
}