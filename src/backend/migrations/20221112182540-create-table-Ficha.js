'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Ficha", {
      uid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },

      aluno_cpf: {
        allowNull: false,
        type: Sequelize.STRING
      },

      tipo_ficha: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

      nome_exercicio: {
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
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Ficha");
  }
}
