// const CarritoCompra = require("./CarritoCompra");

module.exports = (sequelize, DataTypes) => {

    let alias = "productos";

    let cols = {

        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.TEXT },
        description: { type: DataTypes.TEXT },
        price: { type: DataTypes.FLOAT },
        image: { type: DataTypes.TEXT },
        category: { type: DataTypes.TEXT },
    };

    let config = {

        tableName: "productos",
        timestamps: true,

    };

    const Producto = sequelize.define(alias, cols, config);

   /*  Producto.associate = function (models) {
        Producto.hasMany(models.carrito_compra, { foreingKey: 'product_id' });
        CarritoCompra.belongsToMany(models.productos);
    } */

    return Producto;
};