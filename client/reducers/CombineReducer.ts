import GamesReducer from 'client/reducers/GamesReducer';
import { combineReducers } from 'redux';

const MainReducer = combineReducers({
    Games: GamesReducer,
});

export default MainReducer;
