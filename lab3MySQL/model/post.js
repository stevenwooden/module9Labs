const {DataTypes, Model} = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model {}

Post.init({
    postId: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:
        true, primaryKey: true
        },
    
    userID: {
        type: DataTypes.INTEGER, allowNull: false, required: true, foreignKey:true,
        unique: true
        },
    title: {
        type:DataTypes.STRING, allowNull: false, required: true
    },
    description: {
        type:DataTypes.STRING, allowNull: false, required: true
    },
    imageUrl: {
        type:DataTypes.STRING, allowNull: false, required: true
    }
        },
        {
        sequelize: sequelizeInstance, modelName: 'user',
        timestamps: true, freezeTableName: true
})
module.exports = Post