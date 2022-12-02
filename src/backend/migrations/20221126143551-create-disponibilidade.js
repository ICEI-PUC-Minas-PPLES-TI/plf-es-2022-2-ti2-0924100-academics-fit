'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Disponibilidades', {
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
        type: Sequelize.STRING,
        references: {
          model: 'Personais',
          key: 'cpf'
        },
        references: {
          model: 'Alunos',
          key: 'cpf'
        }
      },
      dia_semana: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Disponibilidades');
  }
};