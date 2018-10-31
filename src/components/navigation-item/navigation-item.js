import React from 'react';
import classnames from 'classnames';

import styles from './navigation-item.css';

export default ({path, children, onClick, isCurrent}) => {
    const containerClassNames = classnames(
        styles.container, { [styles.selected]: isCurrent }
    );
    return (
        <div className={containerClassNames}>
            <a
                href={path}
                onClick={(e) => {
                    e.preventDefault();
                    onClick();
                }}
                className={styles.link}
            >
                {children}
            </a>
        </div>
    )
};