'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Cadastrados", {
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

      email: {
        allowNull: false,
        type: Sequelize.STRING
      },

      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },

      senha: {
        allowNull: false,
        type: Sequelize.STRING
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Cadastrados");
  },
};  

