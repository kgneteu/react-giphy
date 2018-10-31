export const SEARCH_SUBMITTED = 'SEARCH_SUBMITTED';
export const SEARCH_ERROR = 'SEARCH_ERROR';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_PERFORMED = 'PERFORM_SEARCH';

export const searchSubmitted = (searchTerm) => ({
    type: SEARCH_SUBMITTED,
    searchTerm,
});

export const searchError = () => ({
    type: SEARCH_ERROR
});

export const searchSuccess = (results) => ({
    type: SEARCH_SUCCESS,
    results
});

export const searchPerformed = () => ({
    type: SEARCH_PERFORMED,
});