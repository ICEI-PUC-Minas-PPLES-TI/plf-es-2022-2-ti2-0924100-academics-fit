'use strict';

module.exports = (sequelize, DataTypes) => {
  sequelize.define('Feedback', {
    uid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    id_feedback: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    personal_cpf: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    avaliacao_sistema_0a10: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    comentario: {
      allowNull: false,
      type: DataTypes.STRING
    },
    recomendaria_o_sistema_0a10: {
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
  
  Feedback.associate = function (models) {
    Feedback.belongsTo(models.Personal, { foreignKey: 'personal_cpf' });
    Feedback.hasMany(models.Aluno, { foreignKey: 'id_feedback' });
  };

  Feedback.init({
    id_feedback: DataTypes.INTEGER,
    personal_cpf: DataTypes.INTEGER,
    avaliacao_sistema_0a10: DataTypes.INTEGER,
    comentario: DataTypes.STRING,
    recomendaria_o_sistema_0a10: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Feedback',
  });

  return Feedback;
};
