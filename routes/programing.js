const express = require('express');
const router = express.Router();
const programController = require('../controllers/programing')
const contactValidated = require('../utils/contactValidation');
const isAuth = require('../middleware/isAuth')

router.get('/', programController.getIndex);
router.get('/admin/add-Program',programController.addProgram);
router.post('/',contactValidated,programController.contact);
router.post('/admin/add-program',programController.postProgram);
router.get('/programs' ,programController.getPrograms);
router.get('/programs/:id',programController.programDetails)

module.exports = router;