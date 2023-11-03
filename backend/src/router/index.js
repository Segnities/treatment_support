const express = require('express');
const router = express.Router();

const consultantsRouter = require("../router/consultantsRouter");
const patientsRouter = require("../router/patientsRouter");
const authRouter = require("./authRouter");

router.use('/consultants', consultantsRouter);
router.use('/patients', patientsRouter);
router.use('/auth', authRouter);

module.exports = router;