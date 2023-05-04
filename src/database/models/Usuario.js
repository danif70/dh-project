const CarritoCompra = require("./CarritoCompra");

module.exports = (sequelize, DataTypes) => {

    // Creación del modelo ------------------------------------------------------------

    let alias = "usuarios";

    let cols = {

        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.TEXT},
        last_name: {type: DataTypes.TEXT},
        email: {type: DataTypes.TEXT},
        password: {type: DataTypes.TEXT},
        image: {type: DataTypes.TEXT},
    };

    let config = {
        tableName: "users",
        timestamps: false,
    };

    const Usuario = sequelize.define(alias, cols, config);

    // Relaciones --------------------------------------------------------------------

    Usuario.associate = function (models){
        Usuario.hasOne(models.carrito_compras, { as: 'carrito_compra', foreignKey: 'id_user' });
    }
    
    return Usuario;
};