const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(path.resolve(__dirname, './public')));
app.set('view engine','ejs');

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '/src/views/index.ejs'));
});

app.get('/register', (req, res) => {
  res.render(path.join(__dirname, '/src/views/register.ejs'));
});

app.get('/login', (req, res) => {
  res.render(path.join(__dirname, '/src/views/login.ejs'));
});

app.get('/cart', (req, res) => {
  res.render(path.join(__dirname, '/src/views/shoppingCart.ejs'));
});

app.get('/product-detail', (req, res) => {
  res.render(path.join(__dirname, 'src/views/productDetail.ejs'));
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
