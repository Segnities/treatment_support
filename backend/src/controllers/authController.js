const {Users} = require("../models");
const APIError = require("../error/APIError");
class AuthController {
    async login(req, res, next) {
        try {
            const {providerName, providerId, email} = req.body;
            const user = await Users.findOne({email});
            if (!user) {
                const newUser = await Users.insertOne({providerName, providerId, email});
                return res.json({user: newUser});
            }
            return res.json({user});
        } catch (e) {
            next(APIError.badRequest(e.message));
            console.log(e);
        }
    }
}

module.exports = new AuthController();