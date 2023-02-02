
const path = require('path');

const loginController = {
    login:  (req, res) => {res.render(path.join(__dirname, '../views/users/login.ejs'), {'styles':["login"], 'title':['Login']});}
}

module.exports = loginController;




