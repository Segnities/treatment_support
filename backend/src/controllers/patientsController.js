const {Patients, Consultants} = require("../models");
const APIError = require("../error/APIError");

class PatientsController {
    async create(req, res, next) {
        try {
            const {
                name,
                surname,
                date_of_birth,
                gender,
                address,
                contact_information,
                uid,
                medical_records,
                attending_consultants,
                insurance_information,
                additional_information
            } = req.body;
            const newPatient = await Patients.insertOne({
                name,
                surname,
                date_of_birth,
                gender,
                address,
                contact_information,
                uid,
                medical_records,
                attending_consultants,
                insurance_information,
                additional_information
            });
            return res.json({patient: newPatient});
        } catch (e) {
            next(APIError.badRequest(e.message));
        }
    }

    async delete(req, res, next) {
        try {
            const {uid} = req.params;
            const deletedConsultant = await Patients.deleteOne({uid});
            return res.json({consultant: deletedConsultant});
        } catch (e) {
            next(APIError.badRequest(e.message));
        }
    }

    async update(req, res, next) {
        try {
            const {uid} = req.params;
            const {
                name,
                surname,
                date_of_birth,
                gender,
                address,
                contact_information,
                medical_records,
                attending_consultants,
                insurance_information,
                additional_information
            } = req.body;
            const updatedPatient = await Patients.updateOne({uid}, {
                $set: {
                    name,
                    surname,
                    date_of_birth,
                    gender,
                    address,
                    contact_information,
                    medical_records,
                    attending_consultants,
                    insurance_information,
                    additional_information
                },
                $currentDate: {lastUpdated: true}
            });
            return res.json({patient: updatedPatient});
        } catch (e) {
            next(APIError.badRequest(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const {uid} = req.params;
            const patient = await Patients.findOne({uid});
            return res.json({patient});
        } catch (e) {
            next(APIError.badRequest(e.message));
        }
    }

    async getAll(req, res, next) {
        try {
            let {consultant_uid, limit, page} = req.query;
            limit = parseInt(limit) || 10;

            const skip = (page - 1) * limit;

            const totalCount = await Patients.countDocuments();
            const patients = await Patients.find({
                "attending_consultants": {
                    $elemMatch: {
                        "uid": {
                            $eq: consultant_uid
                        }
                    }
                }
            }).limit(limit).skip(skip).toArray();

            return res.json({patients, totalCount, currentPage: page});
        } catch (e) {
            next(APIError.internalRequest(e.message));
        }
    }
}

module.exports = new PatientsController();