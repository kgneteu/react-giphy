import React from 'react';
import pageStyles from '../pages.css';
import styles from './random.css';

export default class Random extends React.Component {
    componentDidMount() {
        const { giphy } = this.props;
    }

    render() {
        const { giphy, onClick, refresh } = this.props;
        if (!giphy) {
            return null;
        }
        return (
            <div className={pageStyles.contentWrapper}>
                <div>
                    <button className={styles.button} onClick={(e) => {
                        e.preventDefault();
                        refresh();    
                    }}>Next Giphy</button>
                </div>
                <div>
                    <a href="#" onClick={(e) => {
                        e.preventDefault();
                        onClick(giphy);
                    }}>
                        <img src={giphy.thumbnail} />
                    </a>
                </div>
            </div>
        )
    }
}