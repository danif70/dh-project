const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

const usersDb = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf-8'),
);

const usersController = {
  getLogin: (req, res) => {
    // Estoy redirigiendo a la home si el usuario ya está logueado, pero
    // luego podemos redirigir al perfil del usuario si es necesario
    if (req.session.isAuthenticated) return res.redirect('/');
    res.render('users/login', {
      styles: ['login'],
      title: ['Iniciar sesión'],
      isAuthenticated: false,
      loginError: null,
      loginErrors: null,
    });
  },
  postLogin: (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const mappedErrors = errors.mapped();
      const loginErrors = Object.keys(mappedErrors).map((key) => {
        return {
          [key]: mappedErrors[key].msg,
        };
      });

      console.log(loginErrors);

      return res.render('users/login', {
        styles: ['login'],
        title: ['Iniciar sesión'],
        isAuthenticated: false,
        loginError: null,
        loginErrors,
      });
    }
    const { email, password } = req.body;

    const user = usersDb.find((user) => user.email === email);

    if (!user || user.password !== password) {
      return res.render('users/login', {
        styles: ['login'],
        title: ['Iniciar sesión'],
        isAuthenticated: false,
        loginError: 'Usuario o contraseña incorrectos',
        loginErrors: [],
      });
    }

    req.session.isAuthenticated = true;
    res.redirect('/');
  },

  getLogout: (req, res) => {
    req.session.destroy();
    res.redirect('/');
  },

  register: (req, res) => {
    res.render('users/register', {
      styles: ['register'],
      title: ['Registrarse'],
      isAuthenticated: false,
    });
  },

  registerUser: (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log('fallé');
      return res.render(path.join(__dirname, '../views/users/register.ejs'), {
        styles: ['register'],
        title: ['Registro'],
        errors: errors.mapped(),
        values: req.body,
        isAuthenticated: false,
      });
    }
    const dataBase = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/users.json')));

    const obj = {
      id: dataBase.length + 1,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      document: req.body.document,
      email: req.body.email,
      password: req.body.password,
    };
    dataBase.push(obj);
    fs.writeFileSync(path.join(__dirname, '../database/users.json'), JSON.stringify(dataBase));
    req.session.isAuthenticated = true;
    res.redirect('/');
  },
};

module.exports = usersController;
