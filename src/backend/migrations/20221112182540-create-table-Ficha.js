'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Ficha", {
      uid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },

      cpf: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },

      qualFicha: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

      nomeExercicio: {
        allowNull: false,
        type: Sequelize.STRING
      },

      series: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

      repeticoes: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

      alunosCpf: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Ficha");
  }
}