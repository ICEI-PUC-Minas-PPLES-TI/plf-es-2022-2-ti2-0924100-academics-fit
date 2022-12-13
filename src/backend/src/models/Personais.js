'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Personais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Personais.belongsTo(models.Usuarios, {
        foreignKey: 'usuario_email_fk',
      });

      Personais.hasMany(models.Feedbacks, {
        foreignKey: 'personal_cpf_fk',
      });

      Personais.hasMany(models.Exercicios, {
        foreignKey: 'personal_cpf_fk',
      });

      Personais.hasMany(models.Disponibilidades, {
        foreignKey: 'cpf',
      });

      Personais.hasMany(models.Aulas, {
        foreignKey: 'personal_cpf_fk',
      });
    }
  }

  Personais.init({
    cpf: DataTypes.STRING,
    especializacao: DataTypes.STRING,
    pcd: DataTypes.STRING,
    email: DataTypes.STRING,
    usuario_email_fk: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Personais',
  });

  return Personais;
};
