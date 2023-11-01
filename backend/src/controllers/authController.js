class AuthController {
    async test(req, res){
        return res.json({message: "test"});
    }
}

module.exports = new AuthController();