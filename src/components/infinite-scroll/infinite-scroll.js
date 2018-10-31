import React from 'react';
import Spinner from '../spinner/spinner';

export default class InfinteScroll extends React.Component {
    constructor(...args) {
        super(...args);
        this.container = null;
        this.scrollListener = this.scrollListener.bind(this);
    }

    scrollListener (e) {
        const { onActivate, isLoading, isActive } = this.props;
        const { bottom } = this.container.getBoundingClientRect();
        const viewportHeight = document.documentElement.clientHeight;
        if (bottom <= viewportHeight) {
            if (!isLoading && isActive) {
                onActivate();
            }
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', this.scrollListener);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.scrollListener);
    }

    render() {
        const { children, isLoading } = this.props;
        return (
            <div ref={(e) => { this.container = e; }}>
            {children}
            { isLoading && <Spinner /> }
            </div>
        );
    }
}