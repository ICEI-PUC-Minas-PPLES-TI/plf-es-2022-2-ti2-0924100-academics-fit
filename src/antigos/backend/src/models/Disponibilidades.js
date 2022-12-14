'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Disponibilidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Disponibilidades.belongsTo(models.Personais, {
        foreignKey: 'cpf',
      });
    }
  }

  Disponibilidades.init({
    cpf: DataTypes.STRING,
    dia_semana: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Disponibilidades',
  });

  return Disponibilidades;
};