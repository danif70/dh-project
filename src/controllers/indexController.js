const db = require('../database/models');

const indexController = {

  index: (req, res) => {

    db.productos.findAll({raw: true, limit: 5 }).then((listaDeProductos) => {

      res.render('index', 
      {
        styles: ['index'],
        title: ['Digital Cake'],
        isAuthenticated: req.session.isAuthenticated,
        data: listaDeProductos,
        userinfo : req.session.userInfo
      });
    }).catch((err)=>console.log(err));
  },
};

module.exports = indexController;
