'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('friends',{
      id: {
        type: Sequelize.INTEGER, // use DataTypes instead Sequelize
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      friendId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: 'users',
          key: 'id'
        }},
      userId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: 'users',
          key: 'id'
        }},
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
    await queryInterface.dropTable('friends')
  }
};
