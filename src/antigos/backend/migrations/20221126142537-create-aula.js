'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Aulas', {
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
      data: {
        allowNull: false,
        type: Sequelize.DATE
      },
      ficha_fk: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Fichas',
          key: 'id'
        }
      },
      aluno_cpf_fk: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Alunos',
          key: 'cpf'
        }
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
    await queryInterface.dropTable('Aulas');
  }
};