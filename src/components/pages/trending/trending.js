import React from 'react';
import SearchForm from '../../search-form/search-form';
import SearchResults from '../../search-results/search-results.container';
import GiphyDisplay from '../../giphy-display/giphy-display';
import InfiniteScroll from '../../infinite-scroll/infinite-scroll';
import pageStyles from '../pages.css';

export default class Trending extends React.Component {
    componentDidMount () {
        const { onSearchSubmitted, doSearch } = this.props;
        onSearchSubmitted();
        doSearch();
    }

    render () {
        const {
            searchResults,
            doSearch,
            shouldShowSearchResults,
            isSearchPending,
            noMoreResults,
        } = this.props;
        return (
            <div className={pageStyles.contentWrapper}>
                { shouldShowSearchResults &&
                    <InfiniteScroll
                        onActivate={doSearch}
                        isLoading={isSearchPending}
                        isActive={!noMoreResults}
                    >
                        <SearchResults searchResults={ searchResults } />
                    </InfiniteScroll>
                }
            </div>
        );
    }
}