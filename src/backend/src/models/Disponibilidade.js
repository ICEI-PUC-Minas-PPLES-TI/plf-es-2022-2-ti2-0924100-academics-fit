module.exports = (sequelize, DataTypes) => {
    sequelize.define('Disponibilidade', {
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
    
          diaSemana: {
            allowNull: false,
            type: DataTypes.STRING
          },
    
          horario: {
            allowNull: false,
            type: DataTypes.DATE
          },
    
          personaisCpf: {
            allowNull: false,
            type: DataTypes.STRING
          }
    });

    Disponibilidade.associate = function(models) {
        Disponibilidade.belongsTo(models.Personais, {
            foreignKey: "personaisCpf"
        });
    };
};

