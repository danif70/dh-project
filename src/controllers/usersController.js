const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');

let users = {
    login: (req, res) => { res.render(path.join(__dirname, '../views/users/login.ejs'), { 'styles': ["login"], 'title': ['Login'] }); },
    register: (req, res) => { res.render(path.join(__dirname, '../views/users/register.ejs'), { 'styles': ["register"], 'title': ['Registro'] }); },
    registerUser: (req, res) => {
        const errors = validationResult(req);
       
        if (!errors.isEmpty()) {
            console.log('fallé')
            return res.render(path.join(__dirname, '../views/users/register.ejs'), { 'styles': ["register"], 'title': ['Registro'], errors: errors.mapped(), values: req.body });

        }
        const dataBase = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/users.json')))

        const obj = {
            id: dataBase.length + 1,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            document: req.body.document,
            email: req.body.email,
            password: req.body.password

        };
        dataBase.push(obj)
        fs.writeFileSync(path.join(__dirname, '../database/users.json'), JSON.stringify(dataBase));
        res.redirect('/');

    }
};

module.exports = users; 3