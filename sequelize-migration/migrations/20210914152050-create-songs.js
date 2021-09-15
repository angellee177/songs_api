'use strict';

const tableName = 'songs';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(tableName, {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    genre_id: {
      type: Sequelize.UUID,
      alowNull: true
    },
    artist_id: {
      type: Sequelize.UUID,
      alowNull: true
    },
    album_id: {
      type: Sequelize.UUID,
      alowNull: true
    },
    title: Sequelize.TEXT,
    duration: Sequelize.STRING(8),
    path: Sequelize.TEXT,
    album_order: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    plays: {
      type: Sequelize.INTEGER,
      allowNull: true
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