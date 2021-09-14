const dotenv = require('dotenv')
    , Sequelize = require('sequelize')
    , { defaultToIfEmpty, setLog } = require('../helper/utils')
    , { StatusCodes } = require('http-status-codes');

dotenv.config();

const DB_CONNECTION = defaultToIfEmpty(process.env.DB_CONNECTION, 'mssql')
    , DB_HOST = defaultToIfEmpty(process.env.DB_HOST, 'localhost')
    , DB_PORT = defaultToIfEmpty(process.env.DB_PORT, '1433')
    , DB_NAME = defaultToIfEmpty(process.env.DB_NAME, 'songs_api')
    , DB_USERNAME = defaultToIfEmpty(process.env.DB_USERNAME, 'sa')
    , DB_PASSWORD = defaultToIfEmpty(process.env.DB_PASSWORD, 'UITvBV4Dw6gfc8c');

const sequelizeConnection = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_CONNECTION,
    dialectOptions: {
        encrypt: true
    },
    logging: false,
    pool: {
        max: 1,
        min: 0,
        idle: 10000
    }
});

/**
 * 
 * Check Connection to DB
 * 
 */
const sequelizeConnectionChecker = async(_, res, next) => {
    try {
        await sequelizeConnection.authenticate();

        setLog({
            level: 'DB Connection Checker', method: 'sequelizeConnectionChecker', message: 'Success'
        });

        return true;
    } catch (e) {
        setLog({
            level: 'DB Connection Checker', method: 'sequelizeConnectionChecker failed', message: e.message
        });

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: { status: false, message: 'Oops, something went wrong. Please try again' } });
    }
};

module.exports = { sequelizeConnectionChecker };
