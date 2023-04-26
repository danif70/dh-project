const Usuario = require('./Usuario');

module.exports = (sequelize, DataTypes) => {

  let alias = "carrito_compras";

  let cols = {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
  };

  let config = {
    timestamps: true,
    tableName: "carrito_compras"
  };
  const CarritoCompra = sequelize.define(alias, cols, config);

  return CarritoCompra;
};
