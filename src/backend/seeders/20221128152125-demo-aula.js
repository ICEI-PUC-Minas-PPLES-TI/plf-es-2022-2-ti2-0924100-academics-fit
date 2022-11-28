'use strict';

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Alunos', [
      {
        aluno_cpf_fk: '12345678901',
        personal_cpf_fk: '12345678902',
        data: 'october 1, 2021',
        ficha_fk: 1,
      },

      {
        aluno_cpf_fk: '12345678901',
        personal_cpf_fk: '12345678902',
        data: 'october 2, 2021',
        ficha_fk: 2,
      },

      {
        aluno_cpf_fk: '12345678901',
        personal_cpf_fk: '12345678902',
        data: 'october 3, 2021',
        ficha_fk: 3,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});

  }
};
