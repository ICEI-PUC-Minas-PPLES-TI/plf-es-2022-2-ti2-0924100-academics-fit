'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Exercicios", {
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

      grupoMuscular: {
        allowNull: false,
        type: Sequelize.STRING
      },

      fichaCpf: {
        allowNull: false,
        type: Sequelize.STRING
      },

      personaisCpf: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Exercicios");
  }
}