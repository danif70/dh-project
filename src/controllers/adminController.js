
const path = require('path');

const adminController = {
    addProduct:  (req, res) => {res.render(path.join(__dirname, '../views/admin/admin.ejs'), {'styles':["admin"], 'title':['Administrador']});}
}

module.exports = adminController;