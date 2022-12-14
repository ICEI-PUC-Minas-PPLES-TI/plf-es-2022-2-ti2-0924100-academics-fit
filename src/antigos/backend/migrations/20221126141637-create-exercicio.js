'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Exercicios', {
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
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      link: {
        allowNull: false,
        type: Sequelize.STRING
      },
      grupo_muscular: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ficha_fk: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Fichas',
          key: 'id'
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
    await queryInterface.dropTable('Exercicios');
  }
};