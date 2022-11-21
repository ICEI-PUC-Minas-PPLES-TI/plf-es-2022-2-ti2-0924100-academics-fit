'use strict';

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Alunos', [
      {
        cpf: '12345678901',
        email: 'joao@gmail.com',
        nome: 'João da Silva',
        senha: 'dSFE#$R%$GES80',
      },

      {
        cpf: '12345678902',
        email: 'maria@gmail.com',
        nome: 'Maria da Silva',
        senha: '43fdR!@#60',
      },

      {
        cpf: '12345678903',
        email: 'jose@gmail.com',
        nome: 'José da Silva',
        senha: '70443A@!',
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});

  }
};