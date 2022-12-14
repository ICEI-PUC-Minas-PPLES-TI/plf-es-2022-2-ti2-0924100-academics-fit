'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Feedbacks', {
      uid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      avaliacao_sistema: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      comentario: {
        allowNull: false,
        type: Sequelize.STRING
      },
      recomendacao_sistema: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      personal_cpf_fk: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Personais',
          key: 'cpf'
        }
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
    await queryInterface.dropTable('Feedbacks');
  }
};
