'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  sequelize.define('Usuario', {});
  Usuario.associate = function (models) {};

  Usuario.init({
    email: DataTypes.STRING,
    nome: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });

  return Usuario;
};
