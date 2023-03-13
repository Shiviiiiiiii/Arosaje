const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    return Friends.init(sequelize, DataTypes)
}

class Friends extends Sequelize.Model {
    static init(sequelize,DataTypes){
        super.init({
            id: {
                type: DataTypes.INTEGER, // use DataTypes instead Sequelize
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            friendId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                onDelete: "CASCADE",
                references: {
                    model: 'users',
                    key: 'id'
                },

            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                onDelete: "CASCADE",
                references: {
                    model: 'users',
                    key: 'id'
                },

            },
        }, {
            sequelize,
            timestamps: true,
            tableName: "friends",
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        {name: "id"},
                    ]
                },
                {
                    name: "friend_id",
                    using: "BTREE",
                    fields: [
                        {name: "friend_id"},
                    ]
                },
                {
                    name: "user_id",
                    using: "BTREE",
                    fields: [
                        {name: "user_id"},
                    ]
                },
            ]
        });
        return Friends
    }
}