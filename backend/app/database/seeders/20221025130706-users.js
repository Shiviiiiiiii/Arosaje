'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users',[{
      firstname: 'Doe',
      lastname: 'John',
      email: 'hello@ikonik.com',
      password: 'Test"2133',
    },
      {
        firstname: 'Deleplace',
        lastname: 'Lucas',
        email: 'ldeleplace@ikonik.com',
        password: 'Mel@Luc0803',
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
