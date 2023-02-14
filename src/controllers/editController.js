
const path = require('path');
const fs = require('fs');


let edit = {

    edit: (req,res) => {
        let database = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/products.json')));
        res.render(path.join(__dirname, '../views/admin/edit.ejs'),{'styles':["create"], 'title':['Editar Producto'], producto: database[parseInt(req.params.id)-1]})
    },
   
    overwrite: (req,res) => {
        let database = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/products.json')));
        let editedProduct = {
            id : req.params.id,
            name : req.body.producto,
            description : req.body.descripcion,
            price : req.body.price,
            image :"/images/products/product_7.jpg",       // Falta implementar multer
            category  : req.body.category
        };

        database.find((element)=> {
            if (element.id == editedProduct.id){
                element = editedProduct;
                console.log(element)
            }     
        })
        fs.writeFileSync(path.join(__dirname +'/../database/products.json'), JSON.stringify(database));
// console.log(database)
        

        res.redirect('/products');
    }

}

module.exports = edit;