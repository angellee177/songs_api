'use strict';

const tableName = "users";

const fkName = "song_id_on_users_fk";

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addConstraint(tableName, {
    fields: ['song_id'],
    type: 'foreign key',
    name: fkName,
    references: {
      table: 'songs',
      field: 'id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  }),

  down: (queryInterface, Sequelize) => queryInterface.removeConstraint(tableName, fkName)
};
