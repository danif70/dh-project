const path = require('path');
const db = require('../database/models');

let api = {
  listProducts: (req, res) => {
    db.productos
      .findAll({ raw: true })
      .then((listaDeProductos) => {
        const categoriesArray = listaDeProductos.map((producto) => {
          return producto.id_category;
        });
        const uniqueCategory = {};

        for (const element of categoriesArray) {
          if (uniqueCategory[element]) {
            uniqueCategory[element] += 1;
          } else {
            uniqueCategory[element] = 1;
          }
        }
        const productObj = {
          count: listaDeProductos.length,
          countByCategory: uniqueCategory,
          products: listaDeProductos.map((producto) => {
            return {
              id: producto.id,
              name: producto.name,
              description: producto.description,
              detail: `/products/${producto.id}`,
              img: `/images/products/${producto.image}`,
              // category: producto.id_category,
            };
          }),
        };
        res.json(productObj);
      })
      .catch((err) => console.log(err));
  },
  productDetail: (req, res) => {
    db.productos
      .findOne({ raw: true, where: { id: parseInt(req.params.id) } })
      .then((productRequested) => {
        res.json(productRequested);
      })
      .catch((err) => console.log(err));
  },
  listUsers: (req, res) => {
    db.usuarios
      .findAll({ raw: true })
      .then((listaDeUsuarios) => {
        res.json(listaDeUsuarios);
      })
      .catch((err) => console.log(err));
  },
  userDetail: (req, res) => {
    db.usuarios
      .findOne({ raw: true, where: { id: parseInt(req.params.id) } })
      .then((userRequested) => {
        res.json(userRequested);
      })
      .catch((err) => console.log(err));
  },
  categorieslist: (req, res) => {
    db.categorias
      .findAll({ raw: true })
      .then((listaCategorias) => {
        res.json(listaCategorias);
      })
      .catch((err) => console.log(err));
  },
};
module.exports = api;
