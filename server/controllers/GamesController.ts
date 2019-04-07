import { Request, Response } from 'express-serve-static-core';
import { getGameById, getGames, saveGame } from 'server/repositories/GamesRepository';

export const getGamesList = async (req: Request, res: Response): Promise<void> => {
    try {
        const { provider = '', sort = 0 } = req.query;
        const gamesList = await getGames(sort, provider);
        res.json(gamesList);
    } catch (err) {
        res.status(err.code).json(err);
    }
};

export const getGame = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id = '' } = req.query;
        const game = await getGameById(id);

        res.json(game);
    } catch (err) {
        res.status(err.code).json(err);
    }
};


export const addGame = async (req: Request, res: Response): Promise<void> => {
    try {
        const game = req.body;
        const result = await saveGame(game);

        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(err.code).json(err);
    }
};
