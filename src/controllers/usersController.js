const path = require('path');
const fs = require('fs');

let users = {
    login:  (req, res) => {res.render(path.join(__dirname, '../views/users/login.ejs'), {'styles':["login"], 'title':['Login']});},
    register:  (req, res) => {res.render(path.join(__dirname, '../views/users/register.ejs'), {'styles':["register"], 'title':['Registro']});},
    redirec: (req,res) => {res.redirect("/");}
};

module.exports = users;