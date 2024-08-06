const {DataTypes, Model} = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Comment extends Model {}

Comment.init({
    commentId: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:
        true, primaryKey: true
        },
    postId: {
        type: DataTypes.INTEGER, allowNull: false, required: true, foreignKey: true
        },
    userID: {
        type: DataTypes.INTEGER, allowNull: false, required: true, foreignKey: true,
        unique: true
        },
    content: {
        type: DataTypes.STRING, allowNull: false, required: true
    }
        },
        {
        sequelize: sequelizeInstance, modelName: 'user',
        timestamps: true, freezeTableName: true
})

module.exports = Comment;    