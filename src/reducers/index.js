import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import search from './search';
import giphyDisplay from './giphy-display';
import random from './random';

export default combineReducers({
    router: routerReducer,
    search,
    giphyDisplay,
    random,
});