const path = require('path');
const db = require('../database/models');

let products = {

  list: (req, res) => {

    // Listado de todos los productos con sequelizze
    db.productos.findAll({raw: true}).then((listaDeProductos)=>
    {
      res.render(path.join(__dirname, '../views/products/productsList.ejs'), {
        styles: ['list'],
        title: ['Lista de productos'],
        products: listaDeProductos,
        isAuthenticated: req.session.isAuthenticated,
      });    
    }).catch((err)=>console.log(err));

  },

  createForm: (req, res) => {

    if (!req.session.isAuthenticated) return res.redirect('/login');

    res.render(path.join(__dirname, '../views/admin/createProduct.ejs'), {
      styles: ['create'],
      title: ['Crear producto'],
      isAuthenticated: req.session.isAuthenticated,

    });

  },

  create: (req, res) => {
    if (!req.session.isAuthenticated) return res.redirect('/login');

    // Creación de producto con sequelize
    db.productos.create(
      {
        name: req.body.product,
        description: req.body.descripcion,
        price: parseFloat(req.body.price),
        image: 'product_7.jpg',                      // Falta implementar la actualización de imágen
        id_category: parseInt(req.body.category),
      }).then( () => {res.redirect('/products');}).catch((err) => console.log(err));

  },

  detail: (req, res) => {

    // Detalle de producto con sequelize
    db.productos.findOne({raw: true , where:{id: parseInt(req.params.id)}}).then((productRequested) => 
    {
      res.render(path.join(__dirname, '../views/products/productDetail.ejs'), 
      {
        id: req.params.id,
        styles: ['productDetail'],
        title: ['Detalle del producto'],
        data: productRequested,      
        isAuthenticated: req.session.isAuthenticated,
      });
    }).catch((err)=>console.log(err));

  },

  edit: (req, res) => {

    if (!req.session.isAuthenticated) return res.redirect('/login');

    // Se renderiza el formulario de edición del producto escogido
    db.productos.findOne({raw: true , where:{id: parseInt(req.params.id)}}).then((productToEdit) => 
    {
      res.render(path.join(__dirname, '../views/admin/editProduct.ejs'), {
        styles: ['create'],
        title: ['Editar producto'],
        product: productToEdit,
        isAuthenticated: req.session.isAuthenticated,
      });
    }).catch((err)=>console.log(err));
  },

  update: (req,res) => {

    if (!req.session.isAuthenticated) return res.redirect('/login');

    // Se actualiza el producto escogido
    db.productos.update({
        name: req.body.product,
        description: req.body.descripcion,
        price: parseFloat(req.body.price),                     // Pendiente cómo actualizar la imágen
        id_category: parseInt(req.body.category),
    },
    {
      where:{id: req.body.id}
    }).then( () => {res.redirect('/products');}).catch((err) => console.log(err));

  },


  deleteProduct: (req, res) => {

    if (!req.session.isAuthenticated) return res.redirect('/login');

    // Eliminación de producto con sequelize
    db.productos.destroy({
      where :{
        id : req.params.id
      }
    }).then( () => {res.redirect('/products');}).catch((err) => console.log(err));
  },
};

module.exports = products;
