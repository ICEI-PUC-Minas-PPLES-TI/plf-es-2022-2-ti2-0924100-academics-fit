'use strict';

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Alunos', [
      {
        cpf: '12345678901',
        especializacao: 'musculação',
        pcd: 'nao',
        personal_email_fk: 'manolito@gmail.com',
        usuario_email_fk: 'manolao@gmail.com'
      },

      {
        cpf: '12345678902',
        especializacao: 'musculação',
        pcd: 'nao',
        personal_email_fk: 'charlos@gmail.com',
        usuario_email_fk: 'carlotta@gmail.com'
      },

      {
        cpf: '12345678903',
        especializacao: 'musculação',
        pcd: 'nao',
        personal_email_fk: 'marcotulipa@gmail.com',
        usuario_email_fk: 'AntonioRego@gmail.com'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});

  }
};