

export interface CustomErrorType extends Error {
    statusCode: number;
}

class CustomError extends Error { 
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }
}

const createCustomError = (msg: string, statusCode: number): CustomError => {
    return new CustomError(msg, statusCode);
};

module.exports = {CustomError, createCustomError }
// export  { CustomError, createCustomError };
