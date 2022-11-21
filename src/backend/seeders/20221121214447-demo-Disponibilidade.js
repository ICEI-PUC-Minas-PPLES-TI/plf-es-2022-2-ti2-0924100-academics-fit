'use strict';

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Alunos', [
      {
        cpf: '12345678901',
        diaSemana: 'sabado',
        horario: 17,
        personaisCPF: '12345638301',
      },

      {
        cpf: '12345678902',
        diaSemana: 'quarta',
        horario: 14,
        personaisCPF: '12345648909',
      },

      {
        cpf: '12345678903',
        diaSemana: 'quarta',
        horario: 15,
        personaisCPF: '12345677890',
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});

  }
};