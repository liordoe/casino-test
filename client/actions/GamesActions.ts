import { GET_GAMES, GET_PROVIDERS } from 'client/constants/GamesContants';
import * as API from 'client/services/API';
import { GamesGetMethodConfig } from 'client/services/API';
import Store from 'client/stores/Store';
import { createAction } from 'redux-actions';

export const getGamesAction = createAction(GET_GAMES);
export const getProvidersAction = createAction(GET_PROVIDERS);

export const getGames = async (config: GamesGetMethodConfig = {}) => {
    try {
        const games = await API.getGames(config);
        Store.dispatch(getGamesAction(games));
    } catch (err) {
        console.error(err);
    }
};

export const getProviders = async () => {
    try {
        const providers = await API.getProviders();
        Store.dispatch(getProvidersAction(providers));
    } catch (err) {
        console.error(err);
    }
};
