const path = require('path');
const db = require('../database/models');

let api = {
    listProducts: (req, res) => {
        db.productos.findAll({raw: true}).then((listaDeProductos)=>
        {
          res.json(listaDeProductos);    
        }).catch((err)=>console.log(err));
    
    },
    productDetail:  (req, res) => {
        db.productos.findOne({raw: true , where:{id: parseInt(req.params.id)}}).then((productRequested) => 
        {
          res.json(productRequested);
        }).catch((err)=>console.log(err));
    },
    listUsers:  (req, res) => {
        db.usuarios.findAll({raw: true}).then((listaDeUsuarios)=>
        {
          res.json(listaDeUsuarios);    
        }).catch((err)=>console.log(err));
    },
    userDetail:  (req, res) => {
        db.usuarios.findOne({raw: true , where:{id: parseInt(req.params.id)}}).then((userRequested) => 
        {
          res.json(userRequested);
        }).catch((err)=>console.log(err));
    },
}
module.exports = api;