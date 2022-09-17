'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Usuarios', [
      {
        tipoUsuarioId: 2,
        nome: 'admin',
        email: 'admin@admin.com',
        //senha: senha123
        senha: '$2a$08$XDaKV7tFvbDQMFNRV7TFB.eCQfsWM1T.SJOX3M/pAmTLiF5gjseqq',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tipoUsuarioId: 1,
        nome: 'cliente',
        email: 'cliente@cliente.com',
        //senha: senha123
        senha: '$2a$08$XDaKV7tFvbDQMFNRV7TFB.eCQfsWM1T.SJOX3M/pAmTLiF5gjseqq',
        createdAt: new Date(),
        updatedAt: new Date(),

      }
    ], {});
    
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Usuarios', null, {});

    
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
