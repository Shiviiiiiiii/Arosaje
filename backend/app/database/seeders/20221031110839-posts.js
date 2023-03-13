'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts',[{
      content: 'lorem ipsum dolor',
      userId: 1,
    }],{
      validate: true,
      individualHooks:true,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {});

  }
};
