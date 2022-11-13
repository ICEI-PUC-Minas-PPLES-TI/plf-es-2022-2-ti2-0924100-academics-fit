module.exports = (sequelize, DataTypes) => {
    sequelize.define("Ficha", {
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
    
          qualFicha: {
            allowNull: false,
            type: DataTypes.INTEGER
          },
    
          nomeExercicio: {
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
    
          alunosCpf: {
            allowNull: false,
            type: DataTypes.STRING
          }
    });

    sequelize.associate = function(models) {
        Ficha.belongsTo(models.Alunos, {
            foreignKey: "alunosCpf"
        }); 

        Ficha.hasMany(models.Exercicios, {
            foreignKey: "fichaCpf"
        });
    }
};