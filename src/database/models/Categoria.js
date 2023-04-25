const Usuario = require('./Usuario');

module.exports = (sequelize, dataTypes) => {
  const Categoria = sequelize.define(
    'categorias',
    {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: dataTypes.STRING(45),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    },
  );

  Categoria.belongsTo(Usuario, { foreingKey: 'category_id' });
  Usuario.hasOne(Categoria);

  return Categoria;
};
