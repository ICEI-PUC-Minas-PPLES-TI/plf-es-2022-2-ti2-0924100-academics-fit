'use strict';

module.exports = (sequelize, DataTypes) => {
  sequelize.define('Personal', {});
  Personal.associate = function (models) {};

  Personal.init({
    cpf: DataTypes.STRING,
    especializacao: DataTypes.STRING,
    pcd: DataTypes.STRING,
    personal_email: DataTypes.STRING,
    usuario_email_fk: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Personal',
  });

  return Personal;
};
