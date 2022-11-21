'use strict';

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Alunos', [
      {
        cpf: '12345678901',
        nome: 'João da Silva',
        altura: 180,
        peso: 80,
        imc: (peso / (altura ** 2))
      },

      {
        cpf: '12345678902',
        nome: 'Maria da Silva',
        altura: 160,
        peso: 60,
        imc: (peso / (altura ** 2))
      },

      {
        cpf: '12345678903',
        nome: 'José da Silva',
        altura: 170,
        peso: 70,
        imc: (peso / (altura ** 2))
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});

  }
};