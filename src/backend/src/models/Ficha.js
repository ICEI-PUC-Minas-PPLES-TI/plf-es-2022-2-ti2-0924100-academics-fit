'use strict';

module.exports = (sequelize, DataTypes) => {
  sequelize.define('Ficha', {});
  Ficha.associate = function (models) {};

  Ficha.init({
    nome_exercicio: DataTypes.STRING,
    series: DataTypes.NUMBER,
    repeticoes: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Ficha',
  });

  return Ficha;
};
