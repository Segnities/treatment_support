const {MedicalRecords} = require("../models");
const APIError = require("../error/APIError");

class MedicalRecordsController {
    async create(req, res, next) {
        try {
            const {
                patient_id,
                consultants_id,
                diagnosis,
                treatment_history_id,
                prescriptions_id,
                images,
                additional_information
            } = req.body;
            const newMedicalRecord = MedicalRecords.insertOne({
                patient_id,
                consultants_id,
                diagnosis,
                treatment_history_id,
                prescriptions_id,
                images,
                additional_information
            });
            return res.json({medical_record: newMedicalRecord});
        } catch (e) {
            next(APIError.badRequest(e.message));
        }
    }

    async update(req, res, next) {
        try {
            const {record_id} = req.params;
            const {
                diagnosis,
                images,
                additional_information
            } = req.body;
            const record = MedicalRecords.updateOne({_id: record_id}, {
                $set: {
                    diagnosis,
                    images,
                    additional_information
                }
            });
            return res.json({medical_record: record});
        } catch (e) {
            next(APIError.badRequest(e.message));
        }
    }

    async delete(req, res, next) {
        try {
            const {record_id} = req.params;
            const record = MedicalRecords.deleteOne({_id: record_id});

            return res.json({medical_record: record});
        } catch (e) {
            next(APIError.internalRequest(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const {record_id} = req.params;
            const record = MedicalRecords.findOne({_id: record_id});

            return res.json({medical_record: record});
        } catch (e) {
            next(APIError.internalRequest(e.message));
        }
    }

    async getAllByConsultantId(req, res, next) {
        try {
            const {consultant_id} = req.params;
            const records = await MedicalRecords.find({
                consultants_id: {
                    $elemMatch: {
                        $eq: consultant_id
                    }
                }
            });
            return res.json({records});
        } catch (e) {
            next(APIError.internalRequest(e.message));
        }
    }

    async getAllByPatientId(req, res, next) {
        try {
            const {patient_id} = req.params;
            const records = await MedicalRecords.find({patient_id}).sort({_id: -1});
            return res.json({records});
        } catch (e) {
            next(APIError.internalRequest(e.message));
        }
    }
}

module.exports = new MedicalRecordsController();