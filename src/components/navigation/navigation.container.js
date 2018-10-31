import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Navigation from './navigation';

const buildPage = (path, title) => ({ path, title });
const pages = [
    buildPage('/', 'Search'),
    buildPage('/trending', 'Trending'),
    buildPage('/random', 'Random'),
];

const mapStateToProps = (state) => ({
    pages,
    currentPath: state.router.location.pathname,
});

const mapDispatchToProps = (dispatch) => ({
    pathSelected: (path) => dispatch(push(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);