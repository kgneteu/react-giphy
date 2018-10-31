import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
    SEARCH_PERFORMED,
    searchSuccess,
    searchError,
    searchSubmitted,
    searchPerformed,
} from '../actions/search';
import config from '../config';

const { giphyApiKey } = config;

const getSearchData = (state) => state.search;

export function* doSearch () {
  const { term, currentOffset } = yield select(getSearchData);
  const params = {
    apiKey: giphyApiKey,
    limit: 50,
    offset: currentOffset,
  };
  let endpoint;
  if (typeof term === 'undefined') {
    endpoint = 'trending';
  } else {
    endpoint = 'search';
    params.q = term;
  }
  try {
    const searchResults = yield call(
      axios.get,
      `https://api.giphy.com/v1/gifs/${endpoint}`,
      { params }
    );
    yield put(searchSuccess(searchResults.data.data));
  } catch (error) {
    yield put(searchError());
  }
}

export function* onLocationChange ({ payload: { pathname } }) {
  if (pathname === '/trending') {
    yield put(searchSubmitted());
    yield put(searchPerformed());
  }
}

export default function* () {
  yield takeLatest(SEARCH_PERFORMED, doSearch);
  yield takeLatest(LOCATION_CHANGE, onLocationChange);
}