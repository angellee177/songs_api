'use strict';

const tableName = "songs";

const genreFkName = "genre_id_on_songs_fk";
const artistFkName = "artist_id_on_songs_fk";
const albumFkName = "album_id_on_songs_fk";

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((t) => Promise.all([
    queryInterface.addConstraint(tableName, {
      fields: ['genre_id'],
      type: 'foreign key',
      name: genreFkName,
      references: {
        table: 'genres',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }, { transaction: t}),
    queryInterface.addConstraint(tableName, {
      fields: ['artist_id'],
      type: 'foreign key',
      name: artistFkName,
      references: {
        table: 'artist',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }, { transaction: t }),
    queryInterface.addConstraint(tableName, {
      fields: ['album_id'],
      type: 'foreign key',
      name: albumFkName,
      references: {
        table: 'albums',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }, { transaction: t })
  ])),

  down: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((t) => Promise.all([
    queryInterface.removeConstraint(tableName, genreFkName, { transaction: t }),
    queryInterface.removeConstraint(tableName, artistFkName, { transaction: t }),
    queryInterface.removeConstraint(tableName, albumFkName, { transaction: t })
  ]))
};
