const { sequelize } = require('.');

// const Usuario = usuarios(sequelize);

module.exports = (sequelize, DataTypes) => {

  // Creación del modelo ------------------------------------------------------------

  let alias = "categorias";

  let cols = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(45), allowNull: false },
  };

  let config = {
    timestamps: false,
    tableName: "categories"
  };

  const Categoria = sequelize.define(alias, cols, config);

  // Relaciones --------------------------------------------------------------------

  // Categoria.associate = function (models) {
  //   Categoria.hasMany(models.productos, {as: 'producto', foreingKey: 'id_category' });
  // }; 

  return Categoria;
};
