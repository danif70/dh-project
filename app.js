const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const index = require('./src/routers/index');
const login = require('./src/routers/login');
const register = require('./src/routers/register');
const cart = require('./src/routers/shoppingcart');
const products = require('./src/routers/products');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(path.resolve(__dirname, './public')));
app.set('view engine','ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(index);
app.use(login);
app.use(register);
app.use(cart);
app.use(products);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
