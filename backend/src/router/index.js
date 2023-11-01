const express = require('express');
const router = express.Router();

const consultantsRouter = require("../router/consultantsRouter");
const patientsRouter = require("../router/patientsRouter");

router.use('/consultants', consultantsRouter);
router.use('/patients', patientsRouter);

module.exports = router;