import { getGamesAction } from 'client/actions/GamesActions';
import { GET_GAMES, GET_PROVIDERS } from 'client/constants/GamesContants';
import { handleActions } from 'redux-actions';
import { IGame } from 'types/Game';

interface IGamesReducer {
    available: Array<IGame>;
    providers: Array<string>;
}

const initState: IGamesReducer = {
    available: [],
    providers: [],
};

const GamesReducer = handleActions<IGamesReducer, any>(
    {
        [GET_GAMES]: (state: IGamesReducer, action: typeof getGamesAction) => ({
            ...state,
            available: action.payload,
        }),
        [GET_PROVIDERS]: (state: IGamesReducer, action: typeof getGamesAction) => ({
            ...state,
            providers: action.payload,
        }),
    },
    initState,
);

export default GamesReducer;
