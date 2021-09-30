import React from 'react';
import './SearchResult.scss';

interface Result {
  id: string;
  match: string;
}

interface SearchResultProps {
  results: Result[];
  searchTerm: string;
}

const SearchResult = ({ results = [], searchTerm }: SearchResultProps): JSX.Element => {
  const renderSearchMatch = () => {
    return (
      <div className="search-match">
        We win this game by <span className="match-keyword">playing</span> this rule...
      </div>
    );
  };
  const renderSearchResults = () => {
    return results.map(({ id, match }, index) => (
      <div key={index} className="search-item">
        <div className="match-id">{id}</div>
        {renderSearchMatch()}
      </div>
    ));
  };

  return (
    <div className="search-results">
      <div className="search-count">
        Found {results.length} {results.length > 1 ? 'results' : 'result'}
      </div>
      <div className="search-results-list">{renderSearchResults()}</div>
    </div>
  );
};

export default SearchResult;
