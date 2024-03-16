

const express = require('express');
const router = express.Router();
const autenticarUsuario = require('../controllers/login');
const registrarUsuario = require('../controllers/registrar');
const uploadImg = require('../controllers/updateImg');
const renderImagen = require('../controllers/renderImg')
const imageDelete = require('../controllers/imageDelete')
const multer = require('multer');
const path = require('path');

//const uploadDir = path.join(__dirname, '..', 'uploads');



const storage = multer.diskStorage({
  destination:  'uploads',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

const upload = multer({ storage });



router.post('/api/register', registrarUsuario);
router.post('/api/login', autenticarUsuario);
router.post('/api/upload', upload.single('image'), uploadImg);
router.get('/api/render', renderImagen)
router.delete('/api/delete/:id', imageDelete);

module.exports = router;