'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Fichas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fichas.hasMany(models.Exercicios, {
        foreignKey: 'ficha_id_fk',
      });

      Fichas.hasMany(models.Aulas, {
        foreignKey: 'ficha_id_fk',
      });
    }
  }
  
  Fichas.init({
    nome_exercicio: DataTypes.STRING,
    series: DataTypes.INTEGER,
    repeticoes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Fichas',
  });

  return Fichas;
};
