import createReducer from 'redux-createreducer';

import {
    HIDE_GIPHY_DISPLAY,
    SHOW_GIPHY_DISPLAY
} from '../actions/giphy-display';

const initialState = {
    isShown: false,
    giphyDisplay: null,
};

const actionHandlers = {
    [SHOW_GIPHY_DISPLAY]: (state, { giphy }) => ({
        ...state,
        isShown: true,
        displayedGiphy: giphy,
    }),
    [HIDE_GIPHY_DISPLAY]: (state) => ({
        ...state,
        isShown: false
    }),
};

export default createReducer(initialState, actionHandlers);