const path = require('path');

const cartController = {

  cart: (req, res) => {

    if (!req.session.isAuthenticated) return res.redirect('/login');

    res.render(path.join(__dirname, '../views/products/shoppingCart.ejs'), {
      styles: ['shoppingCart'],
      title: ['Carrito de Compras'],
      isAuthenticated: req.session.isAuthenticated,
    });
  },
};

module.exports = cartController;
