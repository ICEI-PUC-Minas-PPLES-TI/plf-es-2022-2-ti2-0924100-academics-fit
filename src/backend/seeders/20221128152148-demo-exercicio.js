'use strict';

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Alunos', [
      {
        nome: 'polia',
        link: 'https://www.youtube.com/watch?v=Q5Y4Z4ZQZq0',
        grupo_muscular: 'biceps',
        ficha_fk: 1,
        personal_cpf_fk: '12345678902',
      },

      {
        nome: 'rosca direta',
        link: 'https://www.youtube.com/watch?v=Q5Y4Z4ZQZq0',
        grupo_muscular: 'biceps',
        ficha_fk: 2,
        personal_cpf_fk: '12345678902',
      },

      {
        nome: 'rosca alternada',
        link: 'https://www.youtube.com/watch?v=Q5Y4Z4ZQZq0',
        grupo_muscular: 'biceps',
        ficha_fk: 3,
        personal_cpf_fk: '12345678902',
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});

  }
};