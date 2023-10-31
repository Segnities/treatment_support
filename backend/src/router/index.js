const express = require('express');
const router = express.Router();

const consultantsRouter = require("../router/consultantsRouter");

router.use('/consultants', consultantsRouter);

module.exports = router;