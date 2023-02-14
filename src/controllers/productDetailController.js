
const path = require('path');
const fs = require('fs');
const database = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/products.json')));


const detailController = {
    detail:  (req, res) => {res.render(path.join(__dirname, '../views/products/productDetail.ejs'), {'styles':["productDetail"], 'title':['Detalle del producto'], ID : req.params.id, data: database[parseInt(req.params.id)-1]});}
}

module.exports = detailController;


