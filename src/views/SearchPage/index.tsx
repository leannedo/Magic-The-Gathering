import React from 'react';
import SearchResult from '../../components/Search/SearchResult';
import './SearchPage.scss';

const SearchPage = () => {
  return (
    <div className="search-view">
      <h2 className="title">
        Search results for <span className="search-keyword">pig</span>
      </h2>
      <SearchResult />
    </div>
  );
};

export default SearchPage;
