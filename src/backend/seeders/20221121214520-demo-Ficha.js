'use strict';

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Alunos', [
      {
        cpf: '12345678901',
        qualFicha: 2,
        nomeExercicio: 'levantamento terra',
        series: 4,
        repeticoes: 12,
        alunosCpf: '12345678901'
      },

      {
        cpf: '12345678902',
        qualFicha: 2,
        nomeExercicio: 'pulia',
        series: 3,
        repeticoes: 10,
        alunosCpf: '12345678902'
      },

      {
        cpf: '12345678903',
        qualFicha: 1,
        nomeExercicio: 'pulia',
        series: 5,
        repeticoes: 10,
        alunosCpf: '12345678903'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});

  }
};