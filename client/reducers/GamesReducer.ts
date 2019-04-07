import { getGamesAction } from 'client/actions/GamesActions';
import { GET_GAMES, ADD_GAMES, GET_META_FIELDS } from 'client/constants/GamesContants';
import { handleActions } from 'redux-actions';
import { IGame } from 'types/Game';

interface IGamesReducer {
    available: Array<IGame>;
    providers: Array<string>;
    collections: Array<string>;
}

const initState: IGamesReducer = {
    available: [],
    providers: [],
    collections: [],
};

const GamesReducer = handleActions<IGamesReducer, any>(
    {
        [GET_GAMES]: (state: IGamesReducer, action: typeof getGamesAction) => ({
            ...state,
            available: action.payload,
        }),
        [ADD_GAMES]: (state: IGamesReducer, action: typeof getGamesAction) => ({
            ...state,
            available: state.available.concat(action.payload),
        }),
        [GET_META_FIELDS]: (state: IGamesReducer, action: typeof getGamesAction) => ({
            ...state,
            providers: action.payload.providers,
            collections: action.payload.collections,
        }),
    },
    initState,
);

export default GamesReducer;
