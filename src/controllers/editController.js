
const path = require('path');
const database = require(path.join(__dirname, '../database/products.json'));

let edit = {

    edit: (req,res) => {
        res.render(path.join(__dirname, '../views/admin/edit.ejs'),{'styles':["create"], 'title':['Editar Producto'], producto: database[parseInt(req.params.id)-1]})
    }


}

module.exports = edit;