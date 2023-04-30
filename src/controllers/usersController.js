const path = require('path');
const db = require('../database/models');
const { validationResult } = require('express-validator');


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
      loginErrors: [],
    });
  },

  postLogin: (req, res) => {

    // Se cargan los usuarios
    db.usuarios.findAll({raw: true}).then((listaDeUsuarios) => {
      
      usersDb = listaDeUsuarios

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
    res.redirect('/?name='+user.name);

  }).catch((err)=>console.log(err));
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
      return res.render(path.join(__dirname, '../views/users/register.ejs'), {
        styles: ['register'],
        title: ['Registro'],
        errors: errors.mapped(),
        values: req.body,
        isAuthenticated: false,
      });
    }

    // Creación de usuario con sequelize
    db.usuarios.create(
      {
        name: req.body.nombre,
        last_name: req.body.apellido,
        email: req.body.email,
        password: req.body.password,
        image: 'user_image.jpg'            // Falta subir imágen personalizada        
      }
    ).then( () => {
        req.session.isAuthenticated = true;
        res.redirect('/');
      }).catch((err) => console.log(err));
  },
};

module.exports = usersController;
