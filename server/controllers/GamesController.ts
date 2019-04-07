import { Request, Response } from 'express-serve-static-core';
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';
import * as GamesRepository from 'server/repositories/GamesRepository';

export const getGamesList = async (req: Request, res: Response): Promise<void> => {
    try {
        const gamesList = await GamesRepository.getGames(req.query);
        res.json(gamesList);
    } catch (err) {
        res.status(err.code).json(err);
    }
};

export const getGame = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id = '' } = req.query;
        const game = await GamesRepository.getGameById(id);

        res.json(game);
    } catch (err) {
        res.status(err.code).json(err);
    }
};


export const addGame = async (req: Request, res: Response): Promise<void> => {
    try {
        const game = req.body;
        const result = await GamesRepository.saveGame(game);

        res.json(result);
    } catch (err) {
        res.status(err.code).json(err);
    }
};

export const useTestData = async (req: Request, res: Response): Promise<void> => {
    try {
        const rawData = await promisify(fs.readFile)(path.join(process.env.PWD, 'migrations', 'test_data.json'), 'utf-8');
        const data = JSON.parse(rawData);

        await GamesRepository.Flush();

        const promises = data.map(GamesRepository.saveGame);
        const result = await Promise.all(promises);

        res.json(result);
    } catch (err) {
        res.status(err.code).json(err);
    }
};

export const getMetaFields = async (req: Request, res: Response): Promise<void> => {
    try {
        const metaList = await GamesRepository.getMeta();
        res.json(metaList);
    } catch (err) {
        res.status(err.code).json(err);
    }
};
