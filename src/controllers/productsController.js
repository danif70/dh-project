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
        userinfo : req.session.userInfo
      });    
    }).catch((err)=>console.log(err));

  },

  createForm: (req, res) => {

    if (!req.session.isAuthenticated) return res.redirect('/login');

    res.render(path.join(__dirname, '../views/admin/createProduct.ejs'), {
      styles: ['create'],
      title: ['Crear producto'],
      isAuthenticated: req.session.isAuthenticated,
      userinfo : req.session.userInfo
    });

  },

  create: (req, res) => {
    if (!req.session.isAuthenticated) return res.redirect('/login');

    let ima = req.file? req.file.filename:'product_7.jpg';

    // Creación de producto con sequelize
    db.productos.create(
      {
        name: req.body.product,
        description: req.body.descripcion,
        price: parseFloat(req.body.price),
        image: ima,                      // Falta implementar la actualización de imágen
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
        userinfo : req.session.userInfo
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
        userinfo : req.session.userInfo
      });
    }).catch((err)=>console.log(err));
  },

  update: (req,res) => {

    if (!req.session.isAuthenticated) return res.redirect('/login');

    let ima = req.file? req.file.filename:'product_'+req.body.id+'.jpg';

    // Se actualiza el producto escogido
    db.productos.update({
        name: req.body.product,
        description: req.body.descripcion,
        image: ima,
        price: parseFloat(req.body.price),                     
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
