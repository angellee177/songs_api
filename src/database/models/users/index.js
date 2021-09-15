const Sequelize = require('sequelize')
    , connection = require('../../mssqlConnection');

const { Model } = Sequelize;

/**
|-------------------------------------------------------------
| Users Model.
|-------------------------------------------------------------
*/

class Users extends Model {}

Users.init({
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    }, 
    songId: {
        type: Sequelize.UUID,
        allowNull: true
    }, 
    username: {
        type: Sequelize.STRING(25),
        allowNull: true
    },
    firstName: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    lastName: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    email: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(32),
        allowNull: true
    },
    profilePicture: {
        type: Sequelize.BLOB,
        allowNull: true
    }
}, {
    sequelize: connection,
    paranoid: true,
    modelName: 'Users',
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'users'
})

module.exports = Users;
