const Usuario = require('./Usuario');

module.exports = (sequelize, DataTypes) => {

  // Creación del modelo ------------------------------------------------------------

  let alias = "carrito_compras";

  let cols = {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
  };

  let config = {
    timestamps: false,
    tableName: "shopping_cart"
  };

  const CarritoCompra = sequelize.define(alias, cols, config);

  // Relaciones --------------------------------------------------------------------

//   CarritoCompra.associate = function (models){
//     CarritoCompra.belongsTo(models.usuarios, { as: 'usuario', foreingKey: 'id' }); 
//     CarritoCompra.hasOne(models.productos, { as: 'producto', foreingKey: 'id' });
// }


  return CarritoCompra;
};
