'use strict';

module.exports = (sequelize, DataTypes) => {
  sequelize.define('Aluno', {});
  Aluno.associate = function (models) {};

  Aluno.init({
    cpf: DataTypes.STRING,
    altura: DataTypes.INTEGER,
    peso: DataTypes.DOUBLE,
    imc: DataTypes.DOUBLE,
    usuario_email_fk: DataTypes.STRING,
    feedback_id: DataTypes.INTEGER,
    feedback_id_fk: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Aluno',
  });

  return Aluno;
};
