

class CustomError extends Error {
    status?: number;
    constructor(message: string, status?: number) {
        super(message);
        this.status = status    ;
    }
}

const createCustomError = (msg: string, statusCode: number ): CustomError  => {
    return new CustomError( msg, statusCode )
}

module.exports = { CustomError, createCustomError }
