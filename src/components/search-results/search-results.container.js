import { connect } from 'react-redux';
import { showGiphyDisplay } from '../../actions/giphy-display';

import SearchResults from './search-results';

const mapDispatchToProps = (dispatch) => {
    return {
        searchResultClicked: (giphy) => dispatch(showGiphyDisplay(giphy))
    };
};

export default connect(() => ({}), mapDispatchToProps)(SearchResults);