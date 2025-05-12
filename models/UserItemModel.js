// models/userItemModel.js
module.exports = (sequelize, DataTypes) => {
    const UserItem = sequelize.define(
        'UserItem',
        {
            user_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            item_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            count: {
                type: DataTypes.INTEGER,
                defaultValue: 1,
            },
        },
        {
            tableName: 'UserItem',
            timestamps: false,
        }
    );

    return UserItem;
};
