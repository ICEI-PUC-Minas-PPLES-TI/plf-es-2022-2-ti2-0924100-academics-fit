'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Alunos', {
      uid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
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
      feedback_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      usuario_email_fk: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Usuarios',
          key: 'email'
        }
      },
      feedback_id_fk: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Feedbacks',
          key: 'id'
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
    await queryInterface.dropTable('Alunos');
  }
};