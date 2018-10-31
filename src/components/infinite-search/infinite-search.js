import { connect } from 'react-redux';
import { searchSubmitted, searchPerformed } from '../../actions/search';
import { LOAD_STATUS_PENDING } from '../../reducers/search';

const mapStateToProps = (state) => {
    return {
        searchResults: state.search.results,
        shouldShowSearchResults: state.search.results.length > 0,
        isSearchPending: state.search.loadStatus === LOAD_STATUS_PENDING,
        noMoreResults: state.search.noMoreResults,
    };
};

const mapDispatchToProps = (dispatch) => ({
    onSearchSubmitted: (searchTerm) => {
        dispatch(searchSubmitted(searchTerm))
    },
    doSearch: () => dispatch(searchPerformed()),
});

export default connect(mapStateToProps, mapDispatchToProps);