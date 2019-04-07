import * as Utils from 'server/services/Utils';

export interface IDefaultError extends Error {
    message: string;
    stack: string;
    code: number;
    name: string;

    toJSON(): object;
}

export abstract class DefaultError extends Error implements IDefaultError {
    public message: string;
    public stack: string;
    public code: number;
    public name: string;

    protected constructor(message: string, code?: number) {
        super(message);
        const isProd: boolean = Utils.isProduction();

        this.message = message;
        this.code = code || 500;

        if (isProd) {
            this.stack = null;
        } else {
            // Capturing stack trace, excluding constructor call from it.
            Error.captureStackTrace(this, this.constructor);
        }
    }

    toJSON() {
        const json = {};

        for (let key of Object.getOwnPropertyNames(this)) {
            json[key] = this[key];
        }

        return json;
    }
}

export default DefaultError;
