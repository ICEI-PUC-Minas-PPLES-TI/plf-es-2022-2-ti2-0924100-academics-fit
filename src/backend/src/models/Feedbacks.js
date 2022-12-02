'use strict';

module.exports = (sequelize, DataTypes) => {
  const Feedbacks = sequelize.define('Feedbacks', {
    uid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    avaliacao_sistema: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    comentario: {
      allowNull: false,
      type: DataTypes.STRING
    },
    recomendacao_sistema: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    personal_cpf_fk: {
      allowNull: false,
      type: DataTypes.STRING
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
  Feedbacks.associate = function (models) {
    Feedbacks.belongsTo(models.Personais, { foreignKey: 'personal_cpf_fk' });
    Feedbacks.hasMany(models.Alunos, { foreignKey: 'feedback_id_fk' });
  };
  
  return Feedbacks;
};
