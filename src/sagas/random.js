import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
    getRandomGiphySuccess,
    getRandomGiphyError,
    GET_RANDOM_GIPHY,
} from '../actions/random';
import config from '../config';

const { giphyApiKey } = config;

export function* getRandomGiphy () {
  try {
    const randomGiphyResult = yield call(
      axios.get,
      `https://api.giphy.com/v1/gifs/random`,
      { params: { apiKey: giphyApiKey } }
    );
    yield put(getRandomGiphySuccess(randomGiphyResult.data.data));
  } catch (error) {
    yield put(getRandomGiphyError());
  }
}

export function* onLocationChange ({ payload: { pathname } }) {
  if (pathname === '/random') {
      yield getRandomGiphy();
  }
}

export default function* () {
  yield takeLatest(LOCATION_CHANGE, onLocationChange);
  yield takeLatest(GET_RANDOM_GIPHY, getRandomGiphy);
}