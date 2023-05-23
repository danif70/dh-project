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
        Producto.belongsToMany(models.usuarios, {as:'usuarios', through: 'shopping_cart', foreignKey: 'id_product', otherKey: 'id_user', timestamps: false});
        Producto.belongsTo(models.categorias, {as: 'categoria', foreignKey: 'id' });
    } 

    //        Producto.belongsToMany(models.usuarios, {as:'usuarios', through: 'shopping_cart', foreignKey: 'id_product', otherKey: 'id_user', timestamps: false});


    return Producto;
};