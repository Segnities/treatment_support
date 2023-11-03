const {Users} = require("../models");

class AuthController {
    async login(req, res){
        const {providerName, providerId, email} = req.body;
        const user = await Users.findOne({email});
        if (!user) {
            const newUser = await Users.insertOne({providerName, providerId, email});
            return res.json({user: newUser});
        }
        return res.json({user});
    }
}

module.exports = new AuthController();