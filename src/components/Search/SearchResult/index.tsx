import React from 'react';
import './SearchResult.scss';

const SearchResult = () => {
  return (
    <div className="search-results">
      <div className="search-count">Found 5 results</div>
      <div className="search-results-list">
        <div className="search-item">
          <div className="search-title">Concept - Gameplay - 100.1a</div>
          <div className="search-match">
            We win this game by <span className="search-keyword">playing</span> this rule...
          </div>
        </div>
        <div className="search-item">
          <div className="search-title">Concept - Gameplay - 100.1a</div>
          <div className="search-match">We win this game by playing this rule...</div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
