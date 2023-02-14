const path = require('path');
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

};

module.exports = products;