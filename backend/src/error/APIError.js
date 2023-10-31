class APIError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
    static badRequest(message) {
        return new APIError(404, message);
    }

    static unauthorizedRequest(message) {
        return new APIError(401, message);
    }

    static internalRequest(message) {
        return new APIError(500, message);
    }

    static forbidden(message) {
        return new APIError(403, message);
    }
}

module.exports = APIError;