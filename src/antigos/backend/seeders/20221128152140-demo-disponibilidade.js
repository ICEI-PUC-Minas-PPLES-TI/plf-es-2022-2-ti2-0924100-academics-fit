'use strict';

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Alunos', [
      {
        cpf: '12345678901',
       dia_semana: 'segunda',
      },

      {
        cpf: '12345678902',
        dia_semana: 'terça',
      },

      {
        cpf: '12345678903',
        dia_semana: 'quarta',
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});

  }
};