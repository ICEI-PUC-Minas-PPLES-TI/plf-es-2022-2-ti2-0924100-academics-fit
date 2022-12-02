'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Alunos = sequelize.define('Alunos', {
    uid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    cpf: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    altura: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    peso: {
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    imc: {
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    usuario_email_fk: {
      allowNull: false,
      type: DataTypes.STRING
    },
    feedback_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    feedback_id_fk: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  });
  
  Alunos.associate = function (models) {
    Alunos.belongsTo(models.Usuarios, { foreignKey: 'usuario_email_fk' });
    Alunos.belongsTo(models.Feedbacks, { foreignKey: 'feedback_id_fk' });
    Alunos.hasMany(models.Aulas, { foreignKey: 'aluno_cpf_fk' });
    Alunos.hasMany(models.Disponibilidades, { foreignKey: 'cpf' });
  };

  return Alunos;
};
