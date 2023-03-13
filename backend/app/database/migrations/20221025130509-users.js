'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users',{
      id: {
        type: Sequelize.INTEGER, // use DataTypes instead Sequelize
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false // default is true
      },
      lastname: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down:async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users')
  }
};
