const { sequelize } = require('.');

// const Usuario = usuarios(sequelize);

module.exports = (sequelize, DataTypes) => {

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

  /* Categoria.associate = function (models) {
    Categoria.belongsTo(models.usuarios, { foreingKey: 'category_id' });
    Usuario.hasOne(models.categorias);
  }; */

  return Categoria;
};
