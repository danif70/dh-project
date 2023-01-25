
const path = require('path');

const registerController = {
    register:  (req, res) => {res.render(path.join(__dirname, '../views/users/register.ejs'), {'styles':["register"], 'title':['Registro']});}
}

module.exports = registerController;




