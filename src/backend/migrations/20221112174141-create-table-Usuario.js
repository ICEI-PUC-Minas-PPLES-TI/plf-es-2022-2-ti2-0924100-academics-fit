'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Usuario", {
      uid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },

      email: {
        allowNull: false,
        primaryKey: true,
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
    return queryInterface.dropTable("Usuario");
  },
};  
