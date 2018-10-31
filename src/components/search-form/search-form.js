import React from 'react';
import styles from './search-form.css';

export default ({ onSearchSubmitted }) => {
    let searchField = null;
    // Make sure you show what happens if form submit default not prevented
    //Talk about passing in props
    return (
        <form className={styles.container} onSubmit={(e) => onSearchSubmitted(e, searchField.value)}>
            <input
                ref={(elem) => searchField = elem}
                type="text"
                placeholder="Find me Giphys..."
                className={styles.searchField}
            />
            <input type="submit" value="Search" className={styles.button} />
        </form>
    );
};