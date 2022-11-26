'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Alunos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      cpf: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      altura: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      peso: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      imc: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      usuario_email_fk: {
        allowNull: false,
        type: Sequelize.STRING
      },
      feedback_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      feedback_id_fk: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Alunos');
  }
};