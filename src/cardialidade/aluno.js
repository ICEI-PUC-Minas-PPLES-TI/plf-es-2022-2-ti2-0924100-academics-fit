'use strict';

module.exports = (sequelize, DataTypes) => {
  sequelize.define('Aluno', {
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
  
  Aluno.associate = function (models) {
    Aluno.belongsTo(models.Usuario, { foreignKey: 'usuario_email_fk' });
    Aluno.belongsTo(models.Feedback, { foreignKey: 'feedback_id_fk' });
    Aluno.hasMany(models.Aula, { foreignKey: 'aluno_cpf_fk' });
    Aluno.hasMany(models.Disponibilidade, { foreignKey: 'cpf' });
  };

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
