// const CarritoCompra = require("./CarritoCompra");

module.exports = (sequelize, DataTypes) => {

    let alias = "usuarios";

    let cols = {

        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        category_id: {type: DataTypes.STRING(45), allowNull: false},
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

    /* Usuario.associate = function (models){
        Usuario.hasOne(models.carrito_compra, { foreingKey: 'user_id' });
        CarritoCompra.belongsTo(models.usuarios);
    } */
    
    return Usuario;
};