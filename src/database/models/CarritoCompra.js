const Usuario = require('./Usuario');

module.exports = (sequelize, DataTypes) => {

  // Creación del modelo ------------------------------------------------------------

  let alias = "carrito_compras";

  let cols = {
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
    // CarritoCompra.hasMany(models.productos, { as: 'producto', foreignKey: 'id' });
}

  return CarritoCompra;
};
