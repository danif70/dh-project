const express = require('express');
let router = express.Router();
const users = require('../controllers/usersController');
const {validations, loginValidations} = require('../validations')
const path = require('path');

// Multer
const multer = require('multer');
let MulterDiskStorage = multer.diskStorage({

    destination: (req, file, callback) => 
    {
        let folder = path.join(__dirname,'../../public/images/users');
        callback(null, folder);
    },

    filename: (req, file, callback) =>
    {
        let imageName = String(Date.now()+path.extname(file.originalname));
        callback(null, imageName);
    }

});

let fileUpload = multer({storage: MulterDiskStorage});

router.get('/login', users.getLogin);
router.post('/login', loginValidations, users.postLogin);
router.get('/logout', users.getLogout);
router.get('/register', users.register);
router.post('/register', [validations, fileUpload.single('file')], users.registerUser);
router.get('/edit-profile', users.userEdit);
router.post('/send-edit-profile', fileUpload.single('file'), users.userEditData);
router.delete('/send-edit-profile', users.deleteData);

module.exports = router;
