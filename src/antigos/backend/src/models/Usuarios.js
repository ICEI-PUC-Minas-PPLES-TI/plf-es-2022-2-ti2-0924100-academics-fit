'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuarios.hasMany(models.Personais, {
        foreignKey: 'usuario_email_fk',
      });

      Usuarios.hasMany(models.Alunos, {
        foreignKey: 'usuario_email_fk',
      });
    }
  }
  
  Usuarios.init({
    email: DataTypes.STRING,
    nome: DataTypes.STRING,
    senha: DataTypes.STRING,
    tipo: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Usuarios',
  });

  return Usuarios;
};
