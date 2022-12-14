'use strict';

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Alunos', [
      {
        nome: 'polia',
        series: 3,
        repeticoes: 10,
      },

      {
        nome: 'rosca direta',
        series: 3,
        repeticoes: 10,
      },

      {
        nome: 'rosca alternada',
        series: 3,
        repeticoes: 10,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});

  }
};