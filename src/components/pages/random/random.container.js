import { connect } from 'react-redux';

import Random from './random';
import { showGiphyDisplay } from '../../../actions/giphy-display';
import { getRandomGiphy } from '../../../actions/random';

const mapStateToProps = (state) => ({
    giphy: state.random.giphy,
});

const mapDispatchToProps = (dispatch) => ({
    onClick: (giphy) => dispatch(showGiphyDisplay(giphy)),
    refresh: () => dispatch(getRandomGiphy()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Random);