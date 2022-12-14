'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedbacks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Feedbacks.belongsTo(models.Personais, {
        foreignKey: 'personal_cpf_fk',
      });

      Feedbacks.hasMany(models.Alunos, {
        foreignKey: 'feedback_id_fk',
      });
    }
  }
  Feedbacks.init({
    avaliacao: DataTypes.INTEGER,
    comentario: DataTypes.STRING,
    recomendacao: DataTypes.INTEGER,
    personal_cpf_fk: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Feedbacks',
  });
  return Feedbacks;
};