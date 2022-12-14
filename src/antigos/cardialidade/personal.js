'use strict';

module.exports = (sequelize, DataTypes) => {
  sequelize.define('Personal', {
    uid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    cpf: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    especializacao: {
      allowNull: false,
      type: DataTypes.STRING
    },
    pcd: {
      allowNull: false,
      type: DataTypes.STRING
    },
    usuario_email: {
        allowNull: false,
        type: DataTypes.STRING
      },
    usuario_email_fk: {
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
  
  Personal.associate = function (models) {
    Personal.belongsTo(models.Usuario, { foreignKey: 'usuario_email_fk' });
    Personal.hasMany(models.Disponibilidade, { foreignKey: 'cpf' });
    Personal.hasMany(models.Exercicio, { foreignKey: 'cpf' });
  };

  Personal.init({
    cpf: DataTypes.INTEGER,
    especializacao: DataTypes.STRING,
    pcd: DataTypes.STRING,
    usuario_email: DataTypes.STRING,
    usuario_email_fk: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Personal',
  });

  return Personal;
};
