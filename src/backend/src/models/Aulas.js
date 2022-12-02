'use strict';

module.exports = (sequelize, DataTypes) => {
  const Aulas = sequelize.define('Aulas', {
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
    aluno_cpf_fk: {
      allowNull: false,
      type: DataTypes.STRING
    },
    personal_cpf_fk: {
      allowNull: false,
      type: DataTypes.STRING
    },
    data: {
      allowNull: false,
      type: DataTypes.DATE
    },
    ficha_fk: {
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
  Aulas.associate = function (models) {
    Aulas.belongsTo(models.Alunos, { foreignKey: 'aluno_cpf_fk' });
    Aulas.belongsTo(models.Personais, { foreignKey: 'personal_cpf_fk' });
    Aulas.belongsTo(models.Fichas, { foreignKey: 'ficha_fk' });
  };

  return Aulas;
};
