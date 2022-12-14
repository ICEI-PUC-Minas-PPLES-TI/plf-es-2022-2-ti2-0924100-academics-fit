'use strict';

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Alunos', [
      {
        cpf: '12345678901',
        altura: 180,
        peso: 80,
        imc: (peso / (altura ** 2)),
        usuario_email_fk: 'jaozinho@gmail.com',
        feedback_id: 1,
        feedback_id_fk: 2,
      },

      {
        cpf: '12345678902',
        altura: 160,
        peso: 60,
        imc: (peso / (altura ** 2)),
        usuario_email_fk: 'mate@gmail.com',
        feedback_id: 2,
        feedback_id_fk: 3,
      },

      {
        cpf: '12345678903',
        altura: 170,
        peso: 70,
        imc: (peso / (altura ** 2)),
        usuario_email_fk: 'jamiro@gmail.com',
        feedback_id: 3,
        feedback_id_fk: 4,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});

  }
};
