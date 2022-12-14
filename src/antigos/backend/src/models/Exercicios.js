'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Exercicios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Exercicios.belongsTo(models.Fichas, {
        foreignKey: 'ficha_id_fk',
      });

      Exercicios.belongsTo(models.Personais, {
        foreignKey: 'personal_cpf_fk',
      });
    }
  }

  Exercicios.init({
    nome: DataTypes.STRING,
    link: DataTypes.STRING,
    grupo_muscular: DataTypes.STRING,
    ficha_id_fk: DataTypes.INTEGER,
    personal_cpf_fk: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Exercicios',
  });
  
  return Exercicios;
};
