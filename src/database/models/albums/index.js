const Sequelize = require('sequelize')
    , connection = require('../../mssqlConnection');

const { Model } = Sequelize;

/**
|-------------------------------------------------------------
| Albums Model.
|-------------------------------------------------------------
*/

class Albums extends Model {}

Albums.init({
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    }, 
    title: {
        type: Sequelize.STRING
    }, 
    artWorkPath: {
        type: Sequelize.STRING
    }
}, { 
    sequelize: connection,
    paranoid: true,
    modelName: 'Albums',
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'albums'
})

module.exports = Albums;
