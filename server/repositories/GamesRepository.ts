import RepositoryError from 'server/errors/RepositoryError';
import { GameModel } from 'server/models/GameModel';
import { IGame } from 'types/Game';

export const getGames = async (fields: { [s: string]: string }): Promise<any> => {
    try {
        const findCondition = {} as any;
        const { provider, collection, page } = fields;
        const step = 20;
        let skip = 0;
        let limit = step;
        if (provider) {
            findCondition.gameProvider = provider;
        }
        if (collection) {
            findCondition.gameCollectionIds = collection;
        }
        if (!isNaN(parseInt(page))) {
            skip = Number(page) * step;
            limit = skip + step;
        }
        return await GameModel.find(findCondition).skip(skip).limit(limit);
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
        return await gameDoc.save();
    } catch (err) {
        throw new RepositoryError(err.message, 400);
    }
};

export const getMeta = async (): Promise<any> => {
    try {
        const [ providers, collections ] = await Promise.all([
            GameModel.distinct('gameProvider'),
            GameModel.distinct('gameCollectionIds'),
        ]);

        return {
            providers,
            collections
        };
    } catch (err) {
        throw new RepositoryError(err.message, 400);
    }
};

export const Flush = async (): Promise<any> => {
    try {
        return await GameModel.deleteMany({});
    } catch (err) {
        throw new RepositoryError(err.message, 400);
    }
};
