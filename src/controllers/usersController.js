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
    req.session.userInfo = user;   

    db.productos.findAll({raw: true, limit: 5 }).then((listaDeProductos) => {

      db.usuarios.findAll({

        raw: true,
        where:{id: parseInt(req.session.userInfo.id)},
        include: {association: "productos"}
  
      }).then((data)=>{

        if (data[0]['productos.id'] == null){
          data = [];
        }

        req.session.totalProducts = data.length;
        req.session.userInfo = {...user, numProds: data.length};

        res.render('index', 
        {
          styles: ['index'],
          title: ['Digital Cake'],
          isAuthenticated: req.session.isAuthenticated,
          data: listaDeProductos,
          userinfo : req.session.userInfo,
        });
       })
      }).catch((err)=>console.log(err));

    
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

    let user = {
      name: req.body.nombre,
      last_name: req.body.apellido,
      email: req.body.email,
      password: req.body.password,
      image: 'user_image.jpg'                   
    }

    // Creación de usuario con sequelize
    db.usuarios.create(user).then( () => {

        req.session.isAuthenticated = false;
        req.session.userInfo = user;

        db.productos.findAll({raw: true, limit: 5 }).then((listaDeProductos) => {

          res.render('index', 
          {
            styles: ['index'],
            title: ['Digital Cake'],
            isAuthenticated: req.session.isAuthenticated,
            data: listaDeProductos,
            userinfo : req.session.userInfo
          });
          
        }).catch((err)=>console.log(err));     
      }).catch((err) => console.log(err));

  },

  userEdit: (req, res) => {

    // Redirigiendo a home si el usuario no está logueado, pero
    if (!req.session.isAuthenticated) return res.redirect('/');

    // Se renderiza el formulario de edición del producto escogido
    db.usuarios.findOne({raw: true , where:{id: req.session.userInfo.id}}).then((userData) => 
    {
      res.render(path.join(__dirname, '../views/users/editProfile.ejs'), {
        styles: ['create'],
        title: ['Editar usuario'],
        user: userData,
        isAuthenticated: req.session.isAuthenticated,
        userinfo : req.session.userInfo
      });
    }).catch((err)=>console.log(err));
  },

  userEditData: (req, res) => {

    if (!req.session.isAuthenticated) return res.redirect('/');

    let ima = req.file? req.file.filename:'user_image.jpg';

    console.log(req.body);

    db.usuarios.update({

      name: req.body.nombre,
      last_name: req.body.apellido,
      image: ima,
      password: req.body.contrasena,
  },
  {
    where:{id: req.body.id}
  }).then(()=>{

      req.session.userInfo.name = req.body.nombre;
      req.session.userInfo.last_name = req.body.apellido;
      req.session.userInfo.image = ima;
      req.session.userInfo.password = req.body.contrasena;

      res.redirect('/');

    }).catch((err)=>console.log(err));
  },

  deleteData: (req,res) => {

    db.usuarios.destroy({
    where:{id: req.session.userInfo.id}
    
  }).then(()=>{   
    
    req.session.isAuthenticated = false; 

    res.redirect('/');

    }).catch((err)=>console.log(err));


  },

};

module.exports = usersController;