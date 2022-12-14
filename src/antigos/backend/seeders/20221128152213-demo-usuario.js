'use strict';

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Alunos', [
      {
        email: 'marchelo@gmail.com',
        nome: 'marchelo',
        senha: '123456'
      },

      {
        email: 'diDiOgo@gmail.com',
        nome: 'diogo',
        senha: '123456'
      },

      {
        email: 'enzoPreguiça@gmail.com',
        nome: 'enzo',
        senha: '123456'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});

  }
};