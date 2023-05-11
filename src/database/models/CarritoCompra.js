const Usuario = require('./Usuario');

module.exports = (sequelize, DataTypes) => {

  // Creación del modelo ------------------------------------------------------------

  let alias = "carrito_compras";

  let cols = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_user: {type: DataTypes.INTEGER},
    id_product:{type: DataTypes.INTEGER}
  };

  let config = {
    timestamps: false,
    tableName: "shopping_cart"
  };

  const CarritoCompra = sequelize.define(alias, cols, config);

  // Relaciones --------------------------------------------------------------------

  CarritoCompra.associate = function (models){
    CarritoCompra.belongsTo(models.usuarios, { as: 'usuario', foreignKey: 'id' }); 
    //CarritoCompra.belongsToMany(models.productos, {as: 'productos', through: 'producto_carrito_compras' });
}

  return CarritoCompra;
};
