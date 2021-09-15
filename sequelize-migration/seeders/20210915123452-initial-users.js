'use strict';

const tableName = "users";

const dateNow = new Date();

const data = [
  'catherine',
  'giovanni',
  'angel'
].map((val, i) => ({
  username: val,
  first_name: val,
  email: val + "@aia.com",
  created_at: dateNow,
  updated_at: dateNow
}))

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(tableName, data),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete(tableName, null, {})
};
