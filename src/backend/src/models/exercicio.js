'use strict';

module.exports = (sequelize, DataTypes) => {
  sequelize.define('Exercicio', {});
  Exercicio.associate = function (models) {};

  Exercicio.init({
    nome: DataTypes.STRING,
    link: DataTypes.STRING,
    grupo_muscular: DataTypes.STRING,
    ficha_fk: DataTypes.INTEGER,
    personal_cpf_fk: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Exercicio',
  });
  
  return Exercicio;
};
