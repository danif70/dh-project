
module.exports = (sequelize, dataTypes) => {

    let alias = "usuarios";

    let cols = {

        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.TEXT},
        last_name: {type: DataTypes.TEXT},
        email: {type: DataTypes.TEXT},
        password: {type: DataTypes.TEXT},
        img: {type: DataTypes.TEXT},
    };

    let config = {

        tableName: "usuarios",
        timestamps: true,

    };

    const Usuario = sequelize.define(alias, cols, config);

    return Usuario;

}