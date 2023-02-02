
const path = require('path');

const indexController = {
    index:  (req, res) => {res.render(path.join(__dirname, '../views/index.ejs'), {'styles':["index"], 'title':['Digital Cake']} );}
}

module.exports = indexController;




