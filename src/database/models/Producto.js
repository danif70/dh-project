
module.exports = (sequelize, dataTypes) => {

    let alias = "PRODUCTOS";

    let cols = {
        
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.TEXT},
        description: {type: DataTypes.TEXT},
        price: {type: DataTypes.FLOAT},
        image: {type: DataTypes.TEXT},
        category: {type: DataTypes.TEXT}, 
    };

    let config = {

        tableName: "productos",
        timestamps: true,

    };

    const Producto = sequelize.define(alias, cols, config);

    return Producto;

}