const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    return Users.init(sequelize, DataTypes)
}

class Users extends Sequelize.Model {
    static init(sequelize,DataTypes){
        super.init({
            id: {
                type: DataTypes.INTEGER, // use DataTypes instead Sequelize
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            firstname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lastname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull:false
            },
        }, {
            sequelize,
            timestamps: true,
            tableName: "users",
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        {name: "id"},
                    ]
                },
            ]
        });
        return Users
    }
}