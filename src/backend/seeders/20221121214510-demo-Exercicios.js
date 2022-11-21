'use strict';

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Alunos', [
      {
        id: '12345678901',
        nome: 'levantamento terra',
        link: 'www.youtube.com/12345678901',
        grupoMuscular: 'biceps',
        fichaCpf: '12345678901',
        personaisCpf: '12345678901'
      },

      {
        id: '12345678902',
        nome: 'rosca',
        link: 'www.youtube.com/12345678902',
        grupoMuscular: 'panturrilha',
        fichaCpf: '12345678902',
        personaisCpf: '12345678902'
      },

      {
        id: '12345678903',
        nome: 'pulia',
        link: 'www.youtube.com/12345678903',
        grupoMuscular: 'superiores',
        fichaCpf: '12345678903',
        personaisCpf: '12345678903'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});

  }
};