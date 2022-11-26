'use strict';

module.exports = (sequelize, DataTypes) => {
  sequelize.define('Feedback', {});
  Feedback.associate = function (models) {};

  Feedback.init({
    avaliacao_sistema: DataTypes.INTEGER,
    comentario: DataTypes.STRING,
    recomendacao_sistema: DataTypes.INTEGER,
    personal_cpf_fk: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Feedback',
  });
  
  return Feedback;
};
