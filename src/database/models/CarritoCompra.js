const Usuario = require('./Usuario');

module.exports = (sequelize, dataTypes) => {
  const CarritoCompra = sequelize.define(
    'carrito_compras',
    {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      timestamps: true,
    },
  );

  return Categoria;
};
