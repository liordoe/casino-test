import { Request, Response } from 'express-serve-static-core';
import { getProviders } from 'server/repositories/GamesRepository';

export const getProvidersList = async (req: Request, res: Response): Promise<void> => {
    try {
        const providersList = await getProviders();
        res.json(providersList);
    } catch (err) {
        res.status(err.code).json(err);
    }
};
