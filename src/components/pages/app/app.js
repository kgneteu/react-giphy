import React from 'react';
import GiphyDisplay from '../../giphy-display/giphy-display';
import Navigation from '../../navigation/navigation.container';
import styles from './app.css';

export default ({
    children,
    giphyDisplayIsShown,
    displayedGiphy,
    hideGiphyDisplay,
}) => (
    <div>
        <h1 className={styles.header}>Giphy Master</h1>
        <Navigation />
        { children }
        {
            giphyDisplayIsShown &&
            <GiphyDisplay
                isShown={giphyDisplayIsShown}
                displayedGiphy={displayedGiphy}
                onClick={() => hideGiphyDisplay()}
            />
            }
    </div>
);