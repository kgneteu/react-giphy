import React from 'react';
import SearchForm from '../../search-form/search-form';
import SearchResults from '../../search-results/search-results.container';
import GiphyDisplay from '../../giphy-display/giphy-display';
import InfiniteScroll from '../../infinite-scroll/infinite-scroll';
import pageStyles from '../pages.css';

export default ({
    onSearchSubmitted,
    doSearch,
    searchResults,
    shouldShowSearchResults,
    isSearchPending,
    noMoreResults,
}) => {
    // Remember to show what happens if you don't wrap in a top level element
    return (
        <div>
            <SearchForm onSearchSubmitted={ (e, searchTerm) => {
                e.preventDefault();
                onSearchSubmitted(searchTerm);
                doSearch();    
            } } />
            { shouldShowSearchResults &&
                <div className={pageStyles.contentWrapper}>
                    <InfiniteScroll
                        onActivate={doSearch}
                        isLoading={isSearchPending}
                        isActive={!noMoreResults}
                    >
                        <SearchResults searchResults={ searchResults } />
                    </InfiniteScroll>
                </div>
            }
        </div>
    );
};