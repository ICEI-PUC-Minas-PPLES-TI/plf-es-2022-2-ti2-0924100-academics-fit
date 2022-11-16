'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Disponibilidade", {
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

      diaSemana: {
        allowNull: false,
        type: Sequelize.STRING
      },

      horario: {
        allowNull: false,
        type: Sequelize.DATE
      },

      personaisCpf: {
        allowNull: false,
        type: Sequelize.STRING
      },
      
      expiracaoFicha: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Disponibilidade");
  }
}
