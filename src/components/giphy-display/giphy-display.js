import React from 'react';
import classnames from 'classnames';

import styles from './giphy-display.css';

export default ({ isShown, displayedGiphy, onClick }) => {
    const classes = classnames(
        styles.container,
        { [styles.isShown]: isShown }
    );
    return (
        <div className={classes} onClick={onClick}>
            <img className={styles.image} src={displayedGiphy.full} />
        </div>
    );
}