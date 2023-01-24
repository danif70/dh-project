const express = require('express');
const path = require('path');
const index = require('./src/routers/index');
const login = require('./src/routers/login');
const product = require('./src/routers/product-detail')
const register = require('./src/routers/register');
const cart = require('./src/routers/shoppingcart');



const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(path.resolve(__dirname, './public')));
app.set('view engine','ejs');


app.use(index);
app.use(login);
app.use(product);
app.use(register);
app.use(cart);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
