module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        comment: {
            type: DataTypes.TEXT,
            allowNull: false
        }
        }, {
        timestamps: true
        });
        return Comment;
    };