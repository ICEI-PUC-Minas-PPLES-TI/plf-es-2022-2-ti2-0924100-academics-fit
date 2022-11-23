'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Aluno", {
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

      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },

      altura: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

      peso: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

      imc: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

      usuario_email: {
        allowNull: false,
        type: Sequelize.STRING
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Aluno");
  },
};
