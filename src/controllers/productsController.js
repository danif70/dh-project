const fs = require('fs');
const path = require('path');
const database = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/products.json')));

let products = {
  list: (req, res) => {
    //if (!req.session.isAuthenticated) return res.redirect('/login');
    res.render(path.join(__dirname, '../views/products/productsList.ejs'), {
      styles: ['list'],
      title: ['Lista de productos'],
      products: database,
      isAuthenticated: req.session.isAuthenticated,
    });
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
    const newProduct = {
      id: database.length + 1,
      name: req.body.product,
      description: req.body.description,
      price: req.body.price,
      image: '/images/products/product_7.jpg', // Falta implementar multer
      category: req.body.category,
    };

    database.push(newProduct);

    fs.writeFileSync(path.join(__dirname + '/../database/products.json'), JSON.stringify(database));

    res.redirect('/products');
  },

  detail: (req, res) => {
    // if (!req.session.isAuthenticated) return res.redirect('/login');
    res.render(path.join(__dirname, '../views/products/productDetail.ejs'), {
      id: req.params.id,
      styles: ['productDetail'],
      title: ['Detalle del producto'],
      data: database[parseInt(req.params.id) - 1],
      isAuthenticated: req.session.isAuthenticated,
    });
  },

  edit: (req, res) => {
    if (!req.session.isAuthenticated) return res.redirect('/login');
    res.render(path.join(__dirname, '../views/admin/editProduct.ejs'), {
      styles: ['create'],
      title: ['Editar producto'],
      product: database[parseInt(req.params.id) - 1],
      isAuthenticated: req.session.isAuthenticated,
    });
  },

  deleteProduct: (req, res) => {
    if (!req.session.isAuthenticated) return res.redirect('/login');
    const filteredDb = database.filter((product) => product.id != req.params.id);

    fs.writeFileSync(path.join(__dirname, '../database/products.json'), JSON.stringify(filteredDb));

    res.redirect('/products');
  },
};

module.exports = products;
