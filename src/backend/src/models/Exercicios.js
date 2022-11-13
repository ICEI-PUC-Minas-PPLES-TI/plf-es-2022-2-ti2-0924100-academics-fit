module.exports = (sequelize, DataTypes) => {
    sequelize.define("Exercicios", {
        uid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
          },
    
          id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING
          },
    
          nome: {
            allowNull: false,
            type: DataTypes.STRING
          },
    
          link: {
            allowNull: false,
            type: DataTypes.INTEGER
          },
    
          grupoMuscular: {
            allowNull: false,
            type: DataTypes.STRING
          },
    
          fichaCpf: {
            allowNull: false,
            type: DataTypes.STRING
          },
    
          personaisCpf: {
            allowNull: false,
            type: DataTypes.STRING
          }
    });

    sequelize.associate = function(models) {
        Exercicios.belongsTo(models.Ficha, {
            foreignKey: "fichaCpf"
        });
        
        Exercicios.belongsTo(models.Personais, {
            foreignKey: "personaisCpf"
        });
    };
};
