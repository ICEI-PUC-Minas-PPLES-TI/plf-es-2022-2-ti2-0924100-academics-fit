'use strict';

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Alunos', [
      {
        cpf: '12345678901',
        nome: 'levi',
        especializacao: 'musculacao',
        pcd: 'nao',
        cadastradosCpf: '12345678901',
      },

      {
        cpf: '12345678902',
        nome: 'maria',	
        especializacao: 'funcional',
        pcd: 'auditiva',	
        cadastradosCpf: '12345678902',
      },

      {
        cpf: '12345678903',
        nome: 'joao',
        especializacao: 'fitness',
        pcd: 'nao',
        cadastradosCpf: '12345678903',
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});

  }
};