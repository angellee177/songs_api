'use strict';

const tableName = 'users';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(tableName, {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    song_id: {
      type: Sequelize.UUID,
      alowNull: false
    },
    username: Sequelize.STRING(25),
    first_name: Sequelize.STRING(50),
    last_name: Sequelize.STRING(50),
    email: {
      type: Sequelize.STRING(200),
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(32),
      allowNull: false
    },
    profile_picture: {
      type: Sequelize.BLOB,
      allowNull: true,
      defaultValue: null
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    updated_at: {
      type:  Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    deleted_at: {
      type: Sequelize.DATE,
      allowNull: true
    }
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable(tableName)
};
