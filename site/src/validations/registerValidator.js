const { check, body } = require('express-validator');

module.exports = [
    check('name').notEmpty().withMessage('Debes ingresar tu nombre'),
    check('lastname').notEmpty().withMessage('Debes ingresar tu apellido'),
    check('email').notEmpty().withMessage('Debes ingresar un email').bail().isEmail().withMessage('Debes ingresar un email válido'),
    check('password').notEmpty().withMessage('Debes ingresar tu contraseña').isLength({min: 6}).withMessage('La contraseña debe tener como mínimo 6 caracteres'),
    body('pass').custom((value, {req}) => value !== req.body.password ? false : true).withMessage('Las contraseñas no coinciden'),
    check('terms').isString('on').withMessage('Debes aceptar los términos y condiciones')
]