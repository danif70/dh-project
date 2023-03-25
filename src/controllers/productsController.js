const path = require('path');
let database = require(path.join(__dirname, '../database/products.json'));
const fs = require('fs');

const { stringify } = require('querystring');

let products = {

    list: (req, res) => {
        const database = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/products.json')));
        res.render(path.join(__dirname, '../views/products/productsList.ejs'), { 'styles': ["list"], 'title': ['Products list'], productsarray: database })
    },
    formcreate: (req, res) => { res.render(path.join(__dirname, '../views/admin/create.ejs'), { 'styles': ["create"], 'title': ['Crear Producto'] }); },
    create: (req, res) => {
        const database = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/products.json')));
        let newproduct = {

            id: database.length + 1,
            name: req.body.producto,
            description: req.body.descripcion,
            price: req.body.price,
            image: "/images/products/product_7.jpg",       // Falta implementar multer
            category: req.body.category
        };

        database.push(newproduct);

        fs.writeFileSync(path.join(__dirname + '/../database/products.json'), JSON.stringify(database));

        res.redirect('/products');

    },
    
    detail:  (req, res) => {res.render(path.join(__dirname, '../views/products/productDetail.ejs'), {'styles':["productDetail"], 'title':['Detalle del producto'], ID : req.params.id, data: database[parseInt(req.params.id)-1]});},
    
    deleteproduct : (req,res) => {

        database = database.filter(product => product.id != req.params.id);
        for (let i = 0; i < database.length; i++ ){
            database[i].id = i+1
        }        

        fs.writeFileSync(path.join(__dirname, '../database/products.json'), JSON.stringify(database));

        res.redirect('/products');

    },

    edit: (req,res) => {
        res.render(path.join(__dirname, '../views/admin/edit.ejs'),{'styles':["create"], 'title':['Editar Producto'], producto: database[parseInt(req.params.id)-1]})
    }
};

module.exports = products;