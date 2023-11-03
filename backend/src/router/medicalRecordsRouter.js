const express = require('express');
const router = express.Router();

const MedicalRecords = require("../controllers/medicalRecordsController");

router.get("/:patient_id", MedicalRecords.getAllByPatientId);
router.get("/:consultant_id", MedicalRecords.getAllByConsultantId);
router.get("/:record_id", MedicalRecords.getOne);

router.post("/create", MedicalRecords.create);
router.put("/:record_id", MedicalRecords.update);
router.delete("/:record_id", MedicalRecords.delete);

module.exports = router;