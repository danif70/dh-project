const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/product-detail', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/product-detail.html'));
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
