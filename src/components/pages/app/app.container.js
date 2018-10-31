import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { hideGiphyDisplay } from '../../../actions/giphy-display';
import App from './app';

const mapStateToProps = (state) => {
    return {
        giphyDisplayIsShown: state.giphyDisplay.isShown,
        displayedGiphy: state.giphyDisplay.displayedGiphy,
    };
};

const mapDispatchToProps = (dispatch) => ({
    hideGiphyDisplay: () => dispatch(hideGiphyDisplay()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));