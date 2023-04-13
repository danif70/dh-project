const CarritoCompra = require("./CarritoCompra");

module.exports = (sequelize, dataTypes) => {

    let alias = "usuarios";

    let cols = {

        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        category_id: {type: dataTypes.STRING(45), allowNull: false},
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

    Usuario.hasOne(CarritoCompra, { foreingKey: 'user_id' });
    CarritoCompra.belongsTo(Usuario);

    return Usuario;

}