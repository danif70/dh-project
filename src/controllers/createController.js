
const path = require('path');

const createController = {
    addProduct:  (req, res) => {res.render(path.join(__dirname, '../views/admin/create.ejs'), {'styles':["create"], 'title':['Crear Producto']});}
}

module.exports = createController;