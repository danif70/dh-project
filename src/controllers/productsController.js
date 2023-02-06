const path = require('path');
const database = require(path.join(__dirname, '../database/products.json'));

let products = {

    list : (req,res) =>{res.render(path.join(__dirname,'../views/products/productsList.ejs'), {'styles':["list"], 'title':['Products list'], productsarray:database})},
    formcreate : (req,res) =>{},
    create : (req,res) =>{},

};

module.exports = products;