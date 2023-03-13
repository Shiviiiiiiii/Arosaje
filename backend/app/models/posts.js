const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    return Posts.init(sequelize, DataTypes)
}

class Posts extends Sequelize.Model {
    static init(sequelize,DataTypes){
        super.init({
                id: {
                    type: DataTypes.INTEGER, // use DataTypes instead Sequelize
                    autoIncrement: true,
                    primaryKey: true,
                    allowNull: false
                },
                content: {
                    type: DataTypes.STRING,
                    allowNull: false
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
            },
            {
                sequelize,
                timestamps: true,
                tableName: "posts",
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
                        name: "user_id",
                        using: "BTREE",
                        fields: [
                            {name: "user_id"},
                        ]
                    },
                ]

            })

        return Posts
    }
}