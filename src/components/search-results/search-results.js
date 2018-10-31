import React from 'react';
import SearchResult from '../search-result/search-result';
import styles from './search-results.css';

export default (props) => {
    const { searchResults, searchResultClicked } = props;
    console.log(props)
    return(
        <div className={styles.container}>
            {
                searchResults.map(
                    (searchResult, i) => (
                        <SearchResult 
                            onClick={() => searchResultClicked(searchResult)}
                            key={ i }
                            searchResult={searchResult}
                        />
                    )
                )
            }
        </div>
    );
};