'use strict';

module.exports = (sequelize, DataTypes) => {
  sequelize.define('Aula', {});
  Aula.associate = function (models) {};

  Aula.init({
    aluno_cpf_fk: DataTypes.STRING,
    personal_cpf_fk: DataTypes.STRING,
    data: DataTypes.DATE,
    ficha_fk: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Aula',
  });

  return Aula;
};
