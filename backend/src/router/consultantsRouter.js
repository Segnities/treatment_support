const express = require('express');
const router = express.Router();
const ConsultantsController = require("../controllers/consultantsController");

router.get('/', ConsultantsController.getAll);
router.get('/:uid', ConsultantsController.getOne);

router.post('/create', ConsultantsController.create);

router.put('/:uid', ConsultantsController.update);
router.delete('/:uid', ConsultantsController.delete);

module.exports = router;

