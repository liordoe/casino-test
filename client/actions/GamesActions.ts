import { GET_GAMES, ADD_GAMES, GET_META_FIELDS } from 'client/constants/GamesContants';
import * as API from 'client/services/API';
import { GamesGetMethodConfig } from 'client/services/API';
import Store from 'client/stores/Store';
import { createAction } from 'redux-actions';

export const getGamesAction = createAction(GET_GAMES);
export const addGamesAction = createAction(ADD_GAMES);
export const getMetaFieldsAction = createAction(GET_META_FIELDS);

export const getGames = async (config: GamesGetMethodConfig = {}) => {
    try {
        const games = await API.getGames(config);
        Store.dispatch(getGamesAction(games));
    } catch (err) {
        console.error(err);
    }
};

export const addGames = async (config: GamesGetMethodConfig = {}) => {
    try {
        const games = await API.getGames(config);
        Store.dispatch(addGamesAction(games));
    } catch (err) {
        console.error(err);
    }
};

export const getMeta = async () => {
    try {
        const data = await API.getMeta();
        Store.dispatch(getMetaFieldsAction(data));
    } catch (err) {
        console.error(err);
    }
};
