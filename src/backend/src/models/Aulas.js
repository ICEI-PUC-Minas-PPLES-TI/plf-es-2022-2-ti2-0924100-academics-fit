'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aulas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Aulas.belongsTo(models.Alunos, {
        foreignKey: 'aluno_cpf_fk',
      });

      Aulas.belongsTo(models.Personais, {
        foreignKey: 'personal_cpf_fk',
      });

      Aulas.belongsTo(models.Fichas, {
        foreignKey: 'ficha_id_fk',
      });
    }
  }

  Aulas.init({
    aluno_cpf_fk: DataTypes.STRING,
    personal_cpf_fk: DataTypes.STRING,
    data: DataTypes.DATE,
    ficha_id_fk: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Aulas',
  });

  return Aulas;
};