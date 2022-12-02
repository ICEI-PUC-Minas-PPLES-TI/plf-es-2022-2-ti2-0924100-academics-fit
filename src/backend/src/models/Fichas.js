'use strict';

module.exports = (sequelize, DataTypes) => {
  const Fichas = sequelize.define('Fichas', {
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
    nome_exercicio: {
      allowNull: false,
      type: DataTypes.STRING
    },
    series: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    repeticoes: {
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
  
  Fichas.associate = function (models) {
    Fichas.hasMany(models.Aulas, { foreignKey: 'ficha_fk' });
    Fichas.hasMany(models.Exercicios, { foreignKey: 'ficha_fk' });
    Fichas.hasMany(models.Personais, { foreignKey: 'personal_cpf_fk' });
  };

  return Fichas;
};
