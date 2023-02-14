const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const index = require('./src/routers/index');
const login = require('./src/routers/login');
const product = require('./src/routers/product-detail')
const register = require('./src/routers/register');
const cart = require('./src/routers/shoppingcart');
const create = require('./src/routers/create');
const products = require('./src/routers/products');
const edit = require('./src/routers/edit');
const deleteproduct = require('./src/routers/deleteProduct');


const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(path.resolve(__dirname, './public')));
app.set('view engine','ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(index);
app.use(login);
app.use(product);
app.use(register);
app.use(cart);
app.use(create);
app.use(products);
app.use(edit);
app.use(deleteproduct);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
