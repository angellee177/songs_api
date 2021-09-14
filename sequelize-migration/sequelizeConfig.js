require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_CONNECTION,
        debug: true,
        dialectOptions: {
          options: {
            encrypt: true,
            // useUTC: true
          },
          bigNumberStrings: true
        },
        migrationStorageTableName: 'sequelize_meta',
        seederStorage: 'sequelize',
        seederStorageTableName: 'sequelize_data'
    },
    testing: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_CONNECTION,
        dialectOptions: {
          options: {
            encrypt: true,
            // useUTC: true
          },
          bigNumberStrings: true
        },
        migrationStorageTableName: 'sequelize_meta',
        seederStorage: 'sequelize',
        seederStoragePath: 'sequelize_data'
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_CONNECTION,
        dialectOptions: {
            options: {
            encrypt: true,
            // useUTC: true
            },
            bigNumberStrings: true
        },
        migrationStorageTableName: 'sequelize_meta',
        seederStorage: 'sequelize',
        seederStorageTableName: 'sequelize_data'
    }
};