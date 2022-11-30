'use strict';

module.exports = (sequelize, DataTypes) => {
  sequelize.define('Exercicio', {
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
    nome: {
      allowNull: false,
      type: DataTypes.STRING
    },
    link: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    grupo_muscular: {
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    ficha_fk: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    personal_cpf: {
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
  
  Exercicio.associate = function (models) {
    Exercicio.belongsTo(models.Ficha, { foreignKey: 'ficha_fk' });
    Exercicio.belongsTo(models.Personal, { foreignKey: 'personal_cpf' });
  };

  Exercicio.init({
    nome: DataTypes.STRING,
    link: DataTypes.INTEGER,
    grupo_muscular: DataTypes.DOUBLE,
    ficha_fk: DataTypes.INTEGER,
    personal_cpf: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Exercicio',
  });

  return Exercicio;
};
