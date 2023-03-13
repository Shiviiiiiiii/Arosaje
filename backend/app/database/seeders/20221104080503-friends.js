'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('friends',[{
      friendId: 1,
      userId: 2,
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('friends', null, {});
  }
};
