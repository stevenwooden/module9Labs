const {DataTypes, Model} = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Likes extends Model {}

Likes.init({
    likesId: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:
        true, primaryKey: true
        },
    postId: {
        type: DataTypes.INTEGER, allowNull: false, required: true, foreignKey: true
        },
    userID: {
        type: DataTypes.INTEGER, allowNull: false, required: true, foreignKey:true,
        unique: true
        },
        },
        {
        sequelize: sequelizeInstance, modelName: 'user',
        timestamps: true, freezeTableName: true
})

module.exports = Likes