
const path = require('path');

const indexController = {
    index:  (req, res) => {res.render(path.join(__dirname, '../views/index.ejs'), {'styles':["index"] } );}
}

module.exports = indexController;




