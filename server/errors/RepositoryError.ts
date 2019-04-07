import DefaultError from 'server/errors/DefaultError';

class RepositoryError extends DefaultError {
    constructor(message: string, code: number = 404) {
        super(message, code);
        this.name = 'RepositoryError';
    }
}

export default RepositoryError;
