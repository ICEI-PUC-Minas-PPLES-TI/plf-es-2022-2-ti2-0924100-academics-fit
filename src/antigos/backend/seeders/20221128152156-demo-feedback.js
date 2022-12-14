'use strict';

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Alunos', [
      {
        avaliacao_sistema: 5,
        comentario: 'Muito bom',
        recomendacao_sistema: 5,
        personal_cpf_fk: '12345678902',
      },

      {
        avaliacao_sistema: 4,
        comentario: 'Bom',
        recomendacao_sistema: 4,
        personal_cpf_fk: '12345678902',
      },

      {
        avaliacao_sistema: 3,
        comentario: 'Regular',
        recomendacao_sistema: 3,
        personal_cpf_fk: '12345678902',
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});

  }
};