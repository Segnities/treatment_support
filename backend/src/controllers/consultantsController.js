const APIError = require("../error/APIError");
const {Consultants} = require("../models/index");

class ConsultantsController {
    async create(req, res, next) {
        try {
            const {
                name,
                surname,
                uid,
                specialty,
                medical_license_number,
                contact_information,
                working_hours,
                additional_information,
                consultant_schedule_id
            } = req.body;
            const newConsultant = await Consultants.insertOne({
                name,
                surname,
                uid,
                specialty,
                medical_license_number,
                contact_information,
                working_hours,
                additional_information,
                consultant_schedule_id
            });
            return res.json({consultant: newConsultant});
        } catch (e) {
            next(APIError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            const {uid} = req.body;
            const deletedConsultant = await Consultants.deleteOne({uid});
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
                specialty,
                medical_license_number,
                contact_information,
                working_hours,
                additional_information,
                consultant_schedule_id
            } = req.body;
            const updatedConsultant = await Consultants.updateOne({uid}, {
                $set: {
                    name,
                    surname,
                    specialty,
                    medical_license_number,
                    contact_information,
                    working_hours,
                    additional_information,
                    consultant_schedule_id
                },
                $currentDate: {lastUpdated: true}
            });
            return res.json({consultant: updatedConsultant});
        } catch (e) {
            next(APIError.badRequest(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const {uid} = req.params;
            const consultant = await Consultants.findOne({uid});
            return res.json({consultant});
        } catch (e) {
            next(APIError.badRequest(e.message));
        }
    }

    async getAll(req, res, next) {
        try {
            let {page, limit} = req.query;
            limit = parseInt(limit) || 10;
            const skip = (page - 1) * limit;
            const consultants = await Consultants.find().limit(limit).skip(skip);
            const totalCount = await Consultants.countDocuments();

            return res.json({consultants, totalCount, currentPage: page, totalPages: Math.ceil(totalCount/limit)});
        } catch (e) {
            next(APIError.internalRequest(e.message));
        }
    }
}

module.exports = new ConsultantsController();