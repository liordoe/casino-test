import RepositoryError from 'server/errors/RepositoryError';
import { GameModel } from 'server/models/GameModel';
import { IGame } from 'types/Game';

export const getGames = async (sort: number, provider?: string): Promise<any> => {
    try {
        const findCondition = {} as any;
        if (provider) {
            findCondition.provider = provider;
        }
        return await GameModel.find(findCondition).sort({ _id: sort });
    } catch (err) {
        throw new RepositoryError(err.message, 404);
    }
};

export const getGameById = async (id: string): Promise<any> => {
    try {
        return await GameModel.findById(id);
    } catch (err) {
        throw new RepositoryError(err.message, 404);
    }
};

export const saveGame = async (game: IGame): Promise<any> => {
    try {
        const gameDoc = new GameModel(game);
        console.log(gameDoc);
        return await gameDoc.save();
    } catch (err) {
        throw new RepositoryError(err.message, 400);
    }
};

export const getProviders = async (): Promise<any> => {
    try {
        return await GameModel.distinct('provider');
    } catch (err) {
        throw new RepositoryError(err.message, 400);
    }
};
