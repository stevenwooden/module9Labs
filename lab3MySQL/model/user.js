

const {DataTypes, Model} = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class User extends Model {}

User.init({
    userId: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:
        true, primaryKey: true
        },
    userName: {
        type: DataTypes.STRING, allowNull: false, required: true
        },
    email: {
        type: DataTypes.STRING, allowNull: false, required: true,
        unique: true
        },
    password: {
        type: DataTypes.STRING, allowNull: false, required: true
        }},
        {
        sequelize: sequelizeInstance, modelName: 'user',
        timestamps: true, freezeTableName: true
})
module.exports = User;