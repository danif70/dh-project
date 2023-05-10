const { body } = require('express-validator');

const validations = [
    body('nombre').notEmpty().withMessage('El nombre es requerido'),
    body('apellido').notEmpty().withMessage('El apellido es requerido'),
    //body('document').notEmpty().withMessage('El número de documento es requerido'),
    body('email').notEmpty().withMessage('El email es requerido'),
    body('email').isEmail().withMessage('El email no es válido'),
    body('password').notEmpty().withMessage('La contraseña es requerida'),
    body('password').isAlphanumeric().withMessage('Debes utilizar letras y números'),
    body('reppassword').notEmpty().withMessage('Debes repetir la contraseña'),
]

const loginValidations = [
  body('email')
    .notEmpty()
    .withMessage('Debes ingresar un email').bail()
    .isEmail()
    .withMessage('Debes ingresar un email válido'),
  body('password').notEmpty().withMessage('Debes ingresar una contraseña'),
];

module.exports = {
  validations,
  loginValidations,
};