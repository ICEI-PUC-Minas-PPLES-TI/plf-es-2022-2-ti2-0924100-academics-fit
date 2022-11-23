'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Exercicio", {
      uid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },

      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },

      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },

      link: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

      grupo_muscular: {
        allowNull: false,
        type: Sequelize.STRING
      },

      ficha: {
        allowNull: false,
        type: Sequelize.STRING
      },

      personal_cpf: {
        allowNull: false,
        type: Sequelize.STRING
      },

      aluno_cpf: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Exercicio");
  }
}
