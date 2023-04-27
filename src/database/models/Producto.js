let CarritoCompra = require("./CarritoCompra");
let Categoria = require("./Categoria");

module.exports = (sequelize, DataTypes) => {

    // Creación del modelo ------------------------------------------------------------

    let alias = "productos";

    let cols = {

        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.TEXT },
        description: { type: DataTypes.TEXT },
        price: { type: DataTypes.FLOAT },
        image: { type: DataTypes.TEXT },
        id_category: { type: DataTypes.INTEGER },
    };

    let config = {

        tableName: "products",
        timestamps: false,

    };

    const Producto = sequelize.define(alias, cols, config);

    // Relaciones --------------------------------------------------------------------

    Producto.associate = function (models) {
        Producto.belongsTo(models.carrito_compras, {as: 'carrito_compra', foreingKey: 'id_product' });
        Producto.belongsTo(models.categorias, {as: 'categoria', foreingKey: 'id' });
    } 

    return Producto;
};