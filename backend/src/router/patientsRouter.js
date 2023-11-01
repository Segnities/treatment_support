const express = require('express');
const router = express.Router();

const PatientsController = require("../controllers/patientsController");

router.get('/', PatientsController.getAll);
router.get('/:uid', PatientsController.getOne);

router.post('/create', PatientsController.create);

router.put('/:uid', PatientsController.update);
router.delete('/:uid', PatientsController.delete);

module.exports = router;
