import React from 'react';
import SearchResult from '../../components/Search/SearchResult';
import { useLocation } from 'react-router-dom';
import './SearchPage.scss';

const SearchPage = (): JSX.Element => {
  const searchTerm = new URLSearchParams(useLocation().search)?.get('query');
  return (
    <div className="search-view">
      <h2 className="title">
        Search results for <span className="search-term">{searchTerm}</span>
      </h2>
      <SearchResult results={[]} searchTerm={searchTerm} />
    </div>
  );
};

export default SearchPage;
