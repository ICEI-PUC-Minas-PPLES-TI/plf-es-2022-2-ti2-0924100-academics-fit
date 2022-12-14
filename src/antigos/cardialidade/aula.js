'use strict';

module.exports = (sequelize, DataTypes) => {
  sequelize.define('Aula', {
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
  Aula.associate = function (models) {
    Aula.belongsTo(models.Aluno, { foreignKey: 'aluno_cpf_fk' });
    Aula.belongsTo(models.Personal, { foreignKey: 'personal_cpf_fk' });
    Aula.belongsTo(models.Ficha, { foreignKey: 'ficha_fk' });
  };

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
