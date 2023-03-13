const fs = require('fs');
const path = require('path');

const usersDb = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf-8'),
);

const authController = {
  getLogin: (req, res) => {
    // Estoy redirigiendo a la home si el usuario ya está logueado, pero
    // luego podemos redirigir al perfil del usuario si es necesario
    if (req.session.isAuthenticated) return res.redirect('/');
    res.render('auth/login', {
      styles: ['login'],
      title: ['Iniciar sesión'],
      isAuthenticated: false,
      error: null,
    });
  },
  postLogin: (req, res) => {
    const { email, password } = req.body;

    const user = usersDb.find((user) => user.email === email);

    if (!user || user.password !== password) {
      return res.render('auth/login', {
        styles: ['login'],
        title: ['Iniciar sesión'],
        isAuthenticated: false,
        error: 'Usuario o contraseña incorrectos',
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
    res.render('auth/register', {
      styles: ['register'],
      title: ['Registrarse'],
      isAuthenticated: false,
    });
  },
};

module.exports = authController;
