import createReducer from 'redux-createreducer';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
    GET_RANDOM_GIPHY_SUCCESS,
} from '../actions/random';

const initialState = {
    giphy: undefined,
};

const transformRandomGiphyResult = ({ fixed_width_downsampled_url, image_original_url }) => ({
    thumbnail: fixed_width_downsampled_url,
    full: image_original_url,
});

const actionHandlers = {
    [GET_RANDOM_GIPHY_SUCCESS]: (state, { giphy }) => ({
        ...state,
        giphy: transformRandomGiphyResult(giphy),
    }),
    [LOCATION_CHANGE]: () => initialState,
};

export default createReducer(initialState, actionHandlers);