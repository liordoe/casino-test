import { NextFunction, Request, Response } from 'express-serve-static-core';
import ObjectValidator from 'server/services/validators/ObjectValidator';

export const ValidateQueryObject = (validObj: { [s: string]: string } = {}) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { query } = req;

        try {
            new ObjectValidator(validObj).Validate(query);
            return next();
        } catch (error) {
            res.status(error.code).json(error);
        }
    };
};
