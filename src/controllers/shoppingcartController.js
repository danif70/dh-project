const path = require('path');
const db = require('../database/models');

const cartController = {

  cart: (req, res) => {

    if (!req.session.isAuthenticated) return res.redirect('/login');

    db.usuarios.findAll({

      raw: true,
      where:{id: parseInt(req.session.userInfo.id)},
      include: {association: "productos"}

    }).then((data)=>{

      if (data[0]['productos.id'] == null){
        data = [];
      }

      res.render(path.join(__dirname, '../views/products/shoppingCart.ejs'), {
        styles: ['shoppingCart'],
        title: ['Carrito de Compras'],
        isAuthenticated: req.session.isAuthenticated,
        userinfo : req.session.userInfo,
        productsInUserCart: data,
      });

    }).catch((err)=>console.log(err));   
    
    },
};

module.exports = cartController;
