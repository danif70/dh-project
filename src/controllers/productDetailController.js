
const path = require('path');

const detailController = {
    detail:  (req, res) => {res.render(path.join(__dirname, '../views/products/productDetail.ejs'), {'styles':["productDetail"], 'title':['Detalle del producto']});}
}

module.exports = detailController;


