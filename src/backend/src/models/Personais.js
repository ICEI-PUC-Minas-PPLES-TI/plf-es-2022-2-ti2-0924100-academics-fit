module.exports = (sequelize, DataTypes) => {
    sequelize.define('Personais', {
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
    
          nome: {
            allowNull: false,
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
    
          cadastradosCpf: {
            allowNull: false,
            type: DataTypes.STRING
          }
    });

    Personais.associate = function(models) {
        Personais.belongsTo(models.Cadastrados, {
            foreignKey: "cadastradosCpf"
        });

        Personais.hasMany(models.Cadastrados, {
            foreignKey: "personaisCpf"
        });

        Personais.hasMany(models.Exercicios, {
            foreignKey: "personaisCpf"
        });
    };
};
