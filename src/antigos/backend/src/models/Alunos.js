'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Alunos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Alunos.belongsTo(models.Usuarios, {
        foreignKey: 'usuario_email_fk',
      });

      Alunos.belongsTo(models.Feedbacks, {
        foreignKey: 'feedback_id_fk',
      });

      Alunos.hasMany(models.Aulas, {
        foreignKey: 'aluno_cpf_fk',
      });
    }
  }

  Alunos.init({
    cpf: DataTypes.STRING,
    altura: DataTypes.FLOAT,
    peso: DataTypes.FLOAT,
    imc: DataTypes.FLOAT,
    logado: DataTypes.BOOLEAN,
    feedback_id: DataTypes.INTEGER,
    usuario_email_fk: DataTypes.STRING,
    feedback_id_fk: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Alunos',
  });

  return Alunos;
};
